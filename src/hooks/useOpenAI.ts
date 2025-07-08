import { useState, useCallback } from 'react';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface UseOpenAIOptions {
  apiKey?: string;
  model?: string;
  maxTokens?: number;
  temperature?: number;
}

export const useOpenAI = (options: UseOpenAIOptions = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const apiKey = options.apiKey || import.meta.env.VITE_OPENAI_API_KEY;
  const model = options.model || import.meta.env.VITE_OPENAI_MODEL || 'gpt-4';

  const systemPrompt = `You are a virtual presales engineer for Wathbah Consulting, Saudi Arabia's technology and management consulting firm. Your role is to help potential clients discover how our services can transform their operations.

ABOUT WATHBAH CONSULTING:
- Technology and management consulting firm where Saudi passion meets global excellence
- Very ambitious consulting firm serving 100+ satisfied clients
- Specializes in AI, digital transformation, and strategic consulting
- Local expertise with global standards

CORE SERVICES TO DISCUSS:
1. Data & AI Awareness - Help organizations understand data and AI potential
2. AI Use Case Identification & Implementation - Find and implement suitable AI opportunities  
3. AI Powered Knowledge Management - Intelligent systems for efficiency
4. Digital Transformation & Management Consulting - Comprehensive transformation strategies
5. Technology & Innovation Strategy - Strategic planning for sustainable growth
6. Change Management & Organizational Development - Managing change for success

KEY BENEFITS TO HIGHLIGHT:
- 95% client satisfaction rate
- 50+ successful projects completed
- Local Saudi expertise with global excellence
- Customized solutions for each client
- Free initial consultation

CONVERSATION GUIDELINES:
- Always respond in Arabic if the user writes in Arabic, English if they write in English
- Ask about their organization and current challenges
- Identify specific use cases relevant to their sector
- Focus on business value and outcomes, NOT technical implementation
- Discuss possibilities at a high level - what outcomes are achievable
- Keep responses conversational and consultative
- After 5-7 exchanges, naturally guide toward scheduling a meeting

IMPORTANT: Never discuss technical architectures, APIs, or implementation details. Focus purely on business outcomes and possibilities.

At the end of meaningful conversations, offer to schedule a consultation: "Would you like to schedule a consultation with our expert team to explore this further?"`;

  const sendMessage = useCallback(async (messages: Message[]): Promise<string> => {
    if (!apiKey) {
      throw new Error('OpenAI API key not configured - using simulation mode');
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          messages: [
            { role: 'system', content: systemPrompt },
            ...messages
          ],
          max_tokens: options.maxTokens || 500,
          temperature: options.temperature || 0.7,
          presence_penalty: 0.1,
          frequency_penalty: 0.1,
        }),
      });

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      return data.choices[0]?.message?.content || 'Sorry, I could not generate a response.';
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [apiKey, model, options.maxTokens, options.temperature]);

  return {
    sendMessage,
    isLoading,
    error,
  };
};