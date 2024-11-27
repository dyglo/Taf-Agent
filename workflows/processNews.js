const SearchAgent = require('../agents/SearchAgent');
const SummarizerAgent = require('../agents/SummarizerAgent');
const WriterAgent = require('../agents/WriterAgent');
const SenderEmailAgent = require('../agents/SenderEmailAgent');
const logger = require('../utils/logger');

class NewsProcessor {
    constructor() {
        this.searchAgent = new SearchAgent();
        this.summarizerAgent = new SummarizerAgent();
        this.writerAgent = new WriterAgent();
        this.senderEmailAgent = new SenderEmailAgent();
    }

    async processNews(query = "artificial intelligence latest developments", emailRecipient, format = "html") {
        try {
            logger.info("Starting news processing workflow...");

            // Step 1: Search for news
            logger.info("Fetching news articles...");
            const articles = await this.searchAgent.searchNews(query);
            
            if (!articles || articles.length === 0) {
                logger.error("No articles found. Stopping process.");
                return false;
            }

            // Step 2: Generate summary
            logger.info("Generating summary...");
            const summary = await this.summarizerAgent.summarize(articles);
            
            if (!summary) {
                logger.error("Failed to generate summary. Stopping process.");
                return false;
            }

            // Step 3: Generate final article
            logger.info("Generating final article...");
            const finalArticle = await this.writerAgent.generateArticle(articles, summary, format);

            // Step 4: Send email if recipient is provided
            if (emailRecipient) {
                logger.info(`Sending email to ${emailRecipient}...`);
                const emailSent = await this.senderEmailAgent.sendEmail(
                    emailRecipient,
                    "AI News Summary Report",
                    finalArticle
                );

                if (!emailSent) {
                    logger.error("Failed to send email.");
                    return false;
                }
                logger.info("Email sent successfully.");
            }

            logger.info("News processing workflow completed successfully.");
            return finalArticle;

        } catch (error) {
            logger.error(`Error in news processing workflow: ${error.message}`);
            return false;
        }
    }
}

module.exports = NewsProcessor;
