const { GoogleGenerativeAI } = require('@google/generative-ai');
const { GOOGLE_API_KEY } = require('../utils/config');

class SummarizerAgent {
    constructor() {
        const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
        this.model = genAI.getGenerativeModel({ model: "gemini-pro" });
    }

    async summarize(articles) {
        try {
            if (!articles || articles.length === 0) {
                console.log("[SummarizerAgent] No articles available to summarize.");
                return "No articles available to summarize.";
            }

            console.log("[SummarizerAgent] Generating summary...");
            let prompt = "Summarize the key insights and trends from these news articles:\n";
            
            articles.forEach(article => {
                prompt += `- Headline: ${article.headline}\n  Snippet: ${article.snippet}\n`;
            });

            const result = await this.model.generateContent(prompt);
            const response = await result.response;
            const summary = response.text();
            
            console.log("[SummarizerAgent] Summary generated successfully.");
            return summary;

        } catch (error) {
            console.error(`[SummarizerAgent] Error in summarize: ${error.message}`);
            return null;
        }
    }
}

module.exports = SummarizerAgent;
