import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the API with your key
const API_KEY = 'YOUR_API_KEY_HERE';  // Replace with your actual API key
const genAI = new GoogleGenerativeAI(API_KEY);

// Example function to use Gemini
async function generateWithGemini(prompt) {
  try {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Gemini API Error:', error);
    throw error;
  }
}

// Usage example
const response = await generateWithGemini("Your prompt here");