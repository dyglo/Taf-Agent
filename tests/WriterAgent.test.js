const WriterAgent = require('../agents/WriterAgent');

describe('WriterAgent', () => {
    let writerAgent;

    beforeEach(() => {
        writerAgent = new WriterAgent();
    });

    test('generateArticle handles empty articles', async () => {
        const result = await writerAgent.generateArticle([], 'Test summary');
        expect(result).toBe('No news articles fetched. Unable to generate a report.');
    });

    test('generateArticle creates markdown format', async () => {
        const mockArticles = [{
            headline: 'Test',
            link: 'http://test.com',
            source: 'Test Source',
            date: '2024-01-01'
        }];
        const result = await writerAgent.generateArticle(mockArticles, 'Test summary', 'markdown');
        expect(result).toContain('# AI News Summary Report');
    });
});
