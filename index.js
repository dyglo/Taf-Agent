require('dotenv').config();
const NewsProcessor = require('./workflows/processNews');
const logger = require('./utils/logger');

async function main() {
    try {
        const newsProcessor = new NewsProcessor();
        
        // Example usage
        const query = "artificial intelligence latest developments";
        const emailRecipient = process.env.Email_User; // Using the email from .env
        
        logger.info('Starting AI News Generation Bot...');
        
        const result = await newsProcessor.processNews(query, emailRecipient, "html");
        
        if (result) {
            logger.info('Process completed successfully.');
            console.log('\nGenerated Article:\n');
            console.log(result);
        } else {
            logger.error('Process failed.');
        }
        
    } catch (error) {
        logger.error(`Main process error: ${error.message}`);
        process.exit(1);
    }
}

// Run the application
if (require.main === module) {
    main().catch(error => {
        logger.error(`Fatal error: ${error.message}`);
        process.exit(1);
    });
}

module.exports = main;
