const SerpApi = require('google-search-results-nodejs');
const { SERP_API_KEY } = require('../utils/config');

class SearchAgent {
    constructor() {
        this.search = new SerpApi.GoogleSearch(SERP_API_KEY);
    }

    async searchNews(query, numResults = 5) {
        try {
            console.log("[SearchAgent] Fetching news articles...");
            
            const params = {
                q: query,
                tbm: "nws",
                num: numResults
            };

            // Using promise-based approach with the search.json() method
            const results = await new Promise((resolve, reject) => {
                this.search.json(params, (data) => {
                    if (data.error) reject(new Error(data.error));
                    else resolve(data);
                });
            });

            if (!results.news_results) {
                console.log("[SearchAgent] No news results found.");
                return [];
            }

            const cleanedData = [];
            const seenHeadlines = new Set();

            for (const article of results.news_results) {
                const headline = article.title?.trim();
                if (headline && !seenHeadlines.has(headline)) {
                    seenHeadlines.add(headline);
                    cleanedData.push({
                        headline: headline,
                        date: article.date || "",
                        source: article.source || "",
                        link: article.link || "",
                        snippet: article.snippet || ""
                    });
                }
            }

            console.log(`[SearchAgent] Found ${cleanedData.length} articles.`);
            return cleanedData;

        } catch (error) {
            console.error(`[SearchAgent] Error in searchNews: ${error.message}`);
            return [];
        }
    }
}

module.exports = SearchAgent;
