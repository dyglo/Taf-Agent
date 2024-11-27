const SenderEmailAgent = require('../agents/SenderEmailAgent');

// Mock nodemailer
jest.mock('nodemailer');
const nodemailer = require('nodemailer');

describe('SenderEmailAgent', () => {
    let senderEmailAgent;
    
    beforeEach(() => {
        // Setup mock
        const mockTransporter = {
            sendMail: jest.fn().mockResolvedValue({ messageId: 'test-id' })
        };
        nodemailer.createTransport.mockReturnValue(mockTransporter);
        
        senderEmailAgent = new SenderEmailAgent();
    });

    test('sendEmail with valid parameters', async () => {
        const result = await senderEmailAgent.sendEmail(
            'test@example.com',
            'Test Subject',
            '<p>Test Content</p>'
        );
        expect(result).toBe(true);
    });
});
