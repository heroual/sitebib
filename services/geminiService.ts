import { GoogleGenAI, Chat, FunctionDeclaration, Type } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const findNearbyHealthFacilities: FunctionDeclaration = {
  name: 'findNearbyHealthFacilities',
  description: 'Finds nearby hospitals and pharmacies based on the user\'s current location and shows them on a map. Use this when the user asks for directions to a hospital, pharmacy, or any medical facility.',
  parameters: {
    type: Type.OBJECT,
    properties: {},
  },
};

export function createChatSession(): Chat {
  const chat: Chat = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
      topP: 0.9,
      topK: 40,
      tools: [{ functionDeclarations: [findNearbyHealthFacilities] }],
    },
  });
  return chat;
}