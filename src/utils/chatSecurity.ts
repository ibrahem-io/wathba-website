/**
 * Security utilities for chat functionality
 */

// Input sanitization
export const sanitizeInput = (input: string): string => {
  // Remove potentially dangerous characters and scripts
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]*>/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .trim()
    .slice(0, 1000); // Limit length
};

// Content validation
export const validateMessage = (message: string): { isValid: boolean; error?: string } => {
  if (!message || message.trim().length === 0) {
    return { isValid: false, error: 'Message cannot be empty' };
  }

  if (message.length > 1000) {
    return { isValid: false, error: 'Message too long' };
  }

  // Check for spam patterns
  const spamPatterns = [
    /(.)\1{10,}/, // Repeated characters
    /https?:\/\/[^\s]+/gi, // URLs (optional restriction)
    /\b(buy|sell|click|free|money|win|prize)\b/gi // Common spam words
  ];

  for (const pattern of spamPatterns) {
    if (pattern.test(message)) {
      return { isValid: false, error: 'Message contains inappropriate content' };
    }
  }

  return { isValid: true };
};

// Generate session ID for tracking
export const generateSessionId = (): string => {
  return `chat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Audit logging (in production, this would send to a logging service)
export const logChatInteraction = (data: {
  sessionId: string;
  userMessage: string;
  aiResponse: string;
  timestamp: Date;
  userAgent?: string;
}): void => {
  // In production, send to audit service
  console.log('Chat Audit Log:', {
    ...data,
    userMessage: data.userMessage.slice(0, 100), // Truncate for privacy
    aiResponse: data.aiResponse.slice(0, 100)
  });
};

// Check if user is from Saudi Arabia (basic implementation)
export const isFromSaudiArabia = (): boolean => {
  // In production, use proper geolocation service
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return timezone === 'Asia/Riyadh' || timezone === 'Asia/Kuwait';
};

// GDPR compliance helpers
export const getCookieConsent = (): boolean => {
  return localStorage.getItem('wathbah_cookie_consent') === 'true';
};

export const setCookieConsent = (consent: boolean): void => {
  localStorage.setItem('wathbah_cookie_consent', consent.toString());
};

// Data retention policy
export const shouldRetainChatData = (): boolean => {
  // Only retain data if user has given consent
  return getCookieConsent();
};

// Clear chat data for privacy
export const clearChatData = (): void => {
  sessionStorage.removeItem('wathbah_chat_messages');
  sessionStorage.removeItem('wathbah_chat_session');
};