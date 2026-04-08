const fs = require('fs');
const path = require('path');

// Create .env.local file with template
const envTemplate = `# Environment Variables
# Copy this file to .env.local and add your API keys

# OpenAI API Configuration
OPENAI_API_KEY=your_openai_api_key_here

# Twilio Configuration for WhatsApp
TWILIO_ACCOUNT_SID=your_twilio_account_sid_here
TWILIO_AUTH_TOKEN=your_twilio_auth_token_here
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886

# Your WhatsApp Numbers (with country code)
MY_WHATSAPP_NUMBER=+2349150270900
# Additional numbers: +23401954518600 (hardcoded in API)

# Instructions:
# 1. Replace all placeholder values with your actual API keys
# 2. Never commit this file to version control
# 3. Add .env.local to .gitignore
# 4. Restart the development server after adding the keys
# 5. For WhatsApp: Use Twilio Sandbox for testing
`;

const envPath = path.join(__dirname, '.env.local');

if (!fs.existsSync(envPath)) {
  fs.writeFileSync(envPath, envTemplate);
  console.log('✅ Created .env.local file');
  console.log('📝 Please edit .env.local and add your actual API keys');
  console.log('');
  console.log('🔑 Required API keys:');
  console.log('  - OPENAI_API_KEY: Get from https://platform.openai.com/api-keys');
  console.log('  - TWILIO_ACCOUNT_SID: Get from Twilio Console');
  console.log('  - TWILIO_AUTH_TOKEN: Get from Twilio Console');
  console.log('');
  console.log('🚀 After adding keys, run: npm run dev');
} else {
  console.log('⚠️  .env.local already exists');
  console.log('📝 Please ensure your API keys are set in .env.local');
}
