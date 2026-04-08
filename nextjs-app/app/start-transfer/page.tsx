'use client';

import React, { useState } from 'react';
import { BackNavigation } from '@/components/layout/Navigation/BackNavigation';

interface Account {
    id: string;
    type: string;
    number: string;
    balance: string;
}

const mockAccounts: Account[] = [
    { id: '1', type: 'Checking', number: '****1234', balance: '$12,450.00' },
    { id: '2', type: 'Savings', number: '****5678', balance: '$45,230.00' },
    { id: '3', type: 'Investment', number: '****9012', balance: '$125,670.00' },
    { id: '4', type: 'Retirement', number: '****3456', balance: '$287,890.00' },
];

export default function StartTransferPage() {
    const [fromAccount, setFromAccount] = useState('');
    const [toAccount, setToAccount] = useState('');
    const [amount, setAmount] = useState('');
    const [transferDate, setTransferDate] = useState(new Date().toISOString().split('T')[0]);
    const [memo, setMemo] = useState('');
    const [errors, setErrors] = useState<{ fromAccount?: string; toAccount?: string; amount?: string }>({});
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const validateForm = () => {
        const newErrors: { fromAccount?: string; toAccount?: string; amount?: string } = {};
        
        if (!fromAccount) newErrors.fromAccount = 'Please select a source account';
        if (!toAccount) newErrors.toAccount = 'Please select a destination account';
        if (!amount) newErrors.amount = 'Please enter an amount';
        else if (parseFloat(amount) <= 0) newErrors.amount = 'Amount must be greater than 0';
        else if (parseFloat(amount) > 10000) newErrors.amount = 'Transfer amount cannot exceed $10,000';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        setShowConfirmation(true);
    };

    const confirmTransfer = async () => {
        setIsLoading(true);
        
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setShowConfirmation(false);
            // Reset form
            setFromAccount('');
            setToAccount('');
            setAmount('');
            setMemo('');
            alert('Transfer completed successfully!');
        }, 2000);
    };

    const selectedFromAccount = mockAccounts.find(acc => acc.id === fromAccount);
    const selectedToAccount = mockAccounts.find(acc => acc.id === toAccount);

    return (
        <div className="min-h-screen bg-gray-50">
            <BackNavigation backUrl="/" />
            <div className="max-w-4xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Start Transfer</h1>
                    <p className="text-lg text-gray-600">Move money between your Fidelity accounts</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Transfer Form */}
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* From Account */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">From Account</label>
                                <select
                                    value={fromAccount}
                                    onChange={(e) => setFromAccount(e.target.value)}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-fidelity-green focus:border-transparent ${
                                        errors.fromAccount ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                >
                                    <option value="">Select account</option>
                                    {mockAccounts.map((account) => (
                                        <option key={account.id} value={account.id}>
                                            {account.type} ({account.number}) - {account.balance}
                                        </option>
                                    ))}
                                </select>
                                {errors.fromAccount && (
                                    <p className="mt-1 text-sm text-red-600">{errors.fromAccount}</p>
                                )}
                            </div>

                            {/* To Account */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">To Account</label>
                                <select
                                    value={toAccount}
                                    onChange={(e) => setToAccount(e.target.value)}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-fidelity-green focus:border-transparent ${
                                        errors.toAccount ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                >
                                    <option value="">Select account</option>
                                    {mockAccounts
                                        .filter(account => account.id !== fromAccount)
                                        .map((account) => (
                                            <option key={account.id} value={account.id}>
                                                {account.type} ({account.number}) - {account.balance}
                                            </option>
                                        ))}
                                </select>
                                {errors.toAccount && (
                                    <p className="mt-1 text-sm text-red-600">{errors.toAccount}</p>
                                )}
                            </div>

                            {/* Amount */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-3 text-gray-500 text-lg">$</span>
                                    <input
                                        type="number"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        placeholder="0.00"
                                        className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-fidelity-green focus:border-transparent text-lg ${
                                            errors.amount ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        step="0.01"
                                        min="0.01"
                                        max="10000"
                                    />
                                </div>
                                {errors.amount && (
                                    <p className="mt-1 text-sm text-red-600">{errors.amount}</p>
                                )}
                                <p className="mt-2 text-sm text-gray-500">
                                    Transfer limit: $10,000 per transaction
                                </p>
                            </div>

                            {/* Transfer Date */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Transfer Date</label>
                                <input
                                    type="date"
                                    value={transferDate}
                                    onChange={(e) => setTransferDate(e.target.value)}
                                    min={new Date().toISOString().split('T')[0]}
                                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-fidelity-green focus:border-transparent"
                                />
                            </div>

                            {/* Memo */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Memo (Optional)</label>
                                <textarea
                                    value={memo}
                                    onChange={(e) => setMemo(e.target.value)}
                                    placeholder="Add a note for this transfer"
                                    rows={3}
                                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-fidelity-green focus:border-transparent resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-fidelity-green text-white py-3 px-4 rounded-lg hover:bg-fidelity-dark-green focus:ring-4 focus:ring-fidelity-green focus:ring-opacity-50"
                            >
                                Review Transfer
                            </button>
                        </form>
                    </div>

                    {/* Transfer Summary */}
                    <div className="space-y-6">
                        {/* Account Balances */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Accounts</h3>
                            <div className="space-y-3">
                                {mockAccounts.map((account) => (
                                    <div
                                        key={account.id}
                                        className={`flex justify-between items-center p-3 rounded-lg border ${
                                            account.id === fromAccount ? 'border-fidelity-green bg-fidelity-green bg-opacity-10' :
                                            account.id === toAccount ? 'border-blue-500 bg-blue-50' :
                                            'border-gray-200'
                                        }`}
                                    >
                                        <div>
                                            <div className="font-medium text-gray-900">{account.type}</div>
                                            <div className="text-sm text-gray-600">{account.number}</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-semibold text-gray-900">{account.balance}</div>
                                            {account.id === fromAccount && (
                                                <div className="text-xs text-fidelity-green">From</div>
                                            )}
                                            {account.id === toAccount && (
                                                <div className="text-xs text-blue-600">To</div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Transfer Preview */}
                        {(fromAccount && toAccount && amount) && (
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Transfer Preview</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">From:</span>
                                        <span className="font-medium">
                                            {selectedFromAccount?.type} ({selectedFromAccount?.number})
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">To:</span>
                                        <span className="font-medium">
                                            {selectedToAccount?.type} ({selectedToAccount?.number})
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Amount:</span>
                                        <span className="font-semibold text-lg">${amount}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Date:</span>
                                        <span className="font-medium">{transferDate}</span>
                                    </div>
                                    {memo && (
                                        <div className="pt-3 border-t">
                                            <div className="text-sm text-gray-600">Memo:</div>
                                            <div className="text-sm">{memo}</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Help Section */}
                        <div className="bg-blue-50 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help?</h3>
                            <p className="text-gray-600 mb-4">
                                Our transfer specialists are available 24/7 to assist you with your transfer needs.
                            </p>
                            <div className="space-y-2">
                                <p className="text-sm">
                                    <strong>Transfer Support:</strong>{' '}
                                    <a href="tel:09150270900" className="text-fidelity-green hover:underline">
                                        09150270900
                                    </a>
                                </p>
                                <p className="text-sm">
                                    <strong>Online Banking:</strong>{' '}
                                    <a href="#" className="text-fidelity-green hover:underline">
                                        Visit Help Center
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Confirmation Modal */}
            {showConfirmation && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Confirm Transfer</h3>
                        
                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between">
                                <span className="text-gray-600">From:</span>
                                <span className="font-medium">
                                    {selectedFromAccount?.type} ({selectedFromAccount?.number})
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">To:</span>
                                <span className="font-medium">
                                    {selectedToAccount?.type} ({selectedToAccount?.number})
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Amount:</span>
                                <span className="font-bold text-lg text-fidelity-green">${amount}</span>
                            </div>
                        </div>

                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                            <p className="text-sm text-yellow-800">
                                <strong>Important:</strong> Transfers cannot be cancelled once confirmed. 
                                Please verify all details are correct.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <button
                                type="button"
                                onClick={() => setShowConfirmation(false)}
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={confirmTransfer}
                                disabled={isLoading}
                                className="flex-1 bg-fidelity-green text-white px-4 py-2 rounded-lg hover:bg-fidelity-dark-green disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <div className="flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-t-2 border-white"></div>
                                        <span className="ml-2">Processing...</span>
                                    </div>
                                ) : (
                                    'Confirm Transfer'
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
