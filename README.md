wathba-website

## AI Expert Chat Feature

This project includes an AI-powered chat feature that serves as a virtual presales engineer for Wathbah Consulting.

### Setup

1. Copy `.env.example` to `.env` and configure your environment variables:
   ```bash
   cp .env.example .env
   ```

2. Add your OpenAI API key:
   ```
   VITE_OPENAI_API_KEY=your_openai_api_key_here
   ```

3. Configure Calendly integration:
   ```
   VITE_CALENDLY_LINK=https://calendly.com/your-calendly-link
   ```

### Features

- **Bilingual Support**: Automatically detects and responds in Arabic or English
- **Smart Conversations**: AI assistant trained on Wathbah's services and expertise
- **Rate Limiting**: Prevents abuse with configurable limits
- **Security**: Input sanitization and content validation
- **Calendly Integration**: Seamless meeting scheduling
- **Export Functionality**: Users can download chat transcripts
- **Mobile Responsive**: Works perfectly on all devices
- **GDPR Compliant**: Respects user privacy and data protection

### Usage

The chat button appears in the bottom-right corner with Arabic text "اتحدث مع خبير آلي" (Talk to an AI Expert). Users can:

1. Click to open the chat interface
2. Ask questions about Wathbah's services
3. Get personalized recommendations
4. Schedule consultations directly through Calendly
5. Export chat transcripts for reference

### Configuration

The AI assistant is configured with detailed knowledge about Wathbah Consulting's services:
- Data & AI Awareness
- AI Use Case Identification & Implementation
- AI Powered Knowledge Management
- Digital Transformation & Management Consulting
- Technology & Innovation Strategy
- Change Management & Organizational Development

### Security Features

- Input sanitization to prevent XSS attacks
- Rate limiting to prevent spam
- Content validation for appropriate messaging
- Session-based data storage (no persistent user data)
- GDPR-compliant data handling
