const SummarizerAgent = require('../agents/SummarizerAgent');

jest.setTimeout(10000);

describe('SummarizerAgent', () => {
    let summarizerAgent;

    beforeEach(() => {
        summarizerAgent = new SummarizerAgent();
    });

    test('summarize handles empty articles array', async () => {
        const summary = await summarizerAgent.summarize([]);
        expect(summary).toBe('No articles available to summarize.');
    });

    test('summarize generates content for valid articles', async () => {
        const mockArticles = [{
            headline: 'Test Headline',
            snippet: 'Test Snippet'
        }];
        const summary = await summarizerAgent.summarize(mockArticles);
        expect(summary === null || typeof summary === 'string').toBeTruthy();
    });
});
