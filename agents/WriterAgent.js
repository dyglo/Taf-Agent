class WriterAgent {
    constructor() {
        // No API dependency needed for text formatting
    }

    async generateArticle(articles, summary, format = "markdown") {
        try {
            if (!articles || articles.length === 0) {
                console.log("[WriterAgent] No news articles fetched. Cannot generate report.");
                return "No news articles fetched. Unable to generate a report.";
            }

            console.log("[WriterAgent] Generating the final article report...");
            let report = "# AI News Summary Report\n\n";
            report += "## Top AI News Headlines\n\n";

            articles.forEach(article => {
                report += `- [${article.headline}](${article.link}) `;
                report += `(Source: ${article.source}, Date: ${article.date})\n`;
            });

            report += "\n## Summary Analysis\n\n";
            report += summary + "\n";

            if (format === "markdown") {
                console.log("[WriterAgent] Report generated successfully in markdown format.");
                return report;
            } else if (format === "html") {
                console.log("[WriterAgent] Report generated successfully in HTML format.");
                // Convert markdown to HTML with proper styling
                const htmlContent = `
                    <html>
                    <head>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                line-height: 1.6;
                                color: #333;
                                max-width: 800px;
                                margin: 0 auto;
                                padding: 20px;
                            }
                            h1 {
                                color: #2c3e50;
                                border-bottom: 2px solid #3498db;
                                padding-bottom: 10px;
                            }
                            h2 {
                                color: #34495e;
                                margin-top: 20px;
                            }
                            a {
                                color: #3498db;
                                text-decoration: none;
                            }
                            a:hover {
                                text-decoration: underline;
                            }
                            ul {
                                padding-left: 20px;
                            }
                            li {
                                margin-bottom: 10px;
                            }
                            .source-info {
                                color: #666;
                                font-size: 0.9em;
                            }
                        </style>
                    </head>
                    <body>
                        ${this.convertMarkdownToHTML(report)}
                    </body>
                    </html>
                `;
                return htmlContent;
            } else {
                console.log("[WriterAgent] Report generated successfully in plain text format.");
                return report;
            }

        } catch (error) {
            console.error(`[WriterAgent] Error in generateArticle: ${error.message}`);
            return "An error occurred while generating the article.";
        }
    }

    convertMarkdownToHTML(markdown) {
        // Basic markdown to HTML conversion
        return markdown
            // Convert headers
            .replace(/# (.*)/g, '<h1>$1</h1>')
            .replace(/## (.*)/g, '<h2>$1</h2>')
            // Convert links
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
            // Convert bold text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            // Convert list items
            .replace(/- (.*)/g, '<li>$1</li>')
            // Wrap lists
            .replace(/(<li>.*<\/li>)/g, '<ul>$1</ul>')
            // Convert line breaks
            .replace(/\n/g, '<br>')
            // Fix double lists
            .replace(/<\/ul><br><ul>/g, '')
            // Add source info styling
            .replace(/\(Source: (.*?)\)/g, '<span class="source-info">(Source: $1)</span>');
    }
}

module.exports = WriterAgent;
