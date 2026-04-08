'use client';

import React, { useState, useRef } from 'react';

interface SmartSearchProps {
  placeholder?: string;
  className?: string;
}

export function SmartSearch({ 
  placeholder = "Ask about banking, savings, investments...", 
  className = "" 
}: SmartSearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [showResults, setShowResults] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults('');
      return;
    }

    setIsLoading(true);
    setIsOpen(true);
    try {
      const response = await fetch('http://localhost:5000/api/financial-search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: searchQuery }),
      });

      if (!response.ok) {
        throw new Error('Search failed');
      }

      const data = await response.json();
      setResults(data.answer || 'No results found. Please try another search term.');
      setShowResults(true);
      setIsOpen(true);
      setError('');
    } catch (error) {
      console.error('Search error:', error);
      setError('Search temporarily unavailable. Please try again later.');
      setShowResults(false);
      setIsOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(query);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setIsOpen(true);
    
    // Auto-search after typing stops
    const timeoutId = setTimeout(() => {
      if (value.trim()) {
        handleSearch(value);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            onFocus={() => setIsOpen(true)}
            placeholder={placeholder}
            className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-green-600 disabled:opacity-50"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-600"></div>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            )}
          </button>
        </div>
      </form>

      {/* Search Results Dropdown */}
      {isOpen && (query.trim() || results || error) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {isLoading ? (
            <div className="p-4 text-center text-gray-500">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-600 mx-auto mb-2"></div>
              Getting financial advice...
            </div>
          ) : error ? (
            <div className="p-4">
              <div className="text-red-600 text-sm mb-2">Error:</div>
              <div className="text-gray-700">{error}</div>
            </div>
          ) : results ? (
            <div className="p-4">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2l-4-4m6 6l-4-4" />
                  </svg>
                </div>
                <div className="text-sm text-gray-600">Financial Assistant Response:</div>
              </div>
              <div className="text-gray-900 leading-relaxed">{results}</div>
            </div>
          ) : query.trim() ? (
            <div className="p-4 text-gray-500 text-center">
              Type to search for answers about investing, retirement, and more...
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
