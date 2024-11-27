const SearchAgent = require('../agents/SearchAgent');

describe('SearchAgent', () => {
    let searchAgent;

    beforeEach(() => {
        searchAgent = new SearchAgent();
    });

    test('searchNews returns array of articles', async () => {
        const articles = await searchAgent.searchNews('test query');
        expect(Array.isArray(articles)).toBe(true);
    });

    test('searchNews handles empty results', async () => {
        // Mock the SerpApi call to return no results
        const articles = await searchAgent.searchNews('');
        expect(articles).toEqual([]);
    });
});
