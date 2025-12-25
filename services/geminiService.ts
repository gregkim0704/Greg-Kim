
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getMarketInsight = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `부동산 자산관리 전문가로서 다음 질문에 대해 심도 있는 통찰력을 제공해주세요. 답변은 한국어로, 전문가적인 말투를 사용해야 합니다: ${query}`,
      config: {
        systemInstruction: "당신은 10년 경력의 프리미엄 부동산 자산관리 전문가입니다. 데이터에 기반하여 신뢰감 있고 통찰력 있는 정보를 제공하십시오.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "현재 실시간 시장 분석 기능을 일시적으로 사용할 수 없습니다. 잠시 후 다시 시도해주세요.";
  }
};
