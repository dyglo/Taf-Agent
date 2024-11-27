# AI News Processing Multi-Agent System

A sophisticated Multi-Agent System (MAS) that automates the process of gathering, summarizing, and delivering AI-related news using various AI services and APIs.

## 🌟 Features

- **Automated News Search**: Utilizes SERPAPI to fetch the latest AI-related news articles
- **Intelligent Summarization**: Leverages Google's Gemini-1.5 Pro AI to generate concise summaries
- **Professional Formatting**: Converts raw content into well-structured HTML/Markdown reports
- **Automated Email Delivery**: Sends formatted news digests via email using Nodemailer
- **Robust Error Handling**: Comprehensive error management across all agents
- **Detailed Logging**: Winston-based logging system for debugging and monitoring

## 🛠️ Technology Stack

- **Node.js**: Runtime environment
- **SERPAPI**: News article search and retrieval
- **Google Gemini-1.5 Pro**: AI-powered text summarization
- **Nodemailer**: Email delivery service
- **Jest**: Testing framework
- **Winston**: Logging system

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- npm (Node Package Manager)
- API keys for:
  - SERPAPI
  - Gemini-1.5 Pro
- Gmail account with App Password configured


## 🤖 Agent Descriptions

### SearchAgent
- Fetches news articles using SERPAPI
- Filters and deduplicates results
- Returns structured article data

### SummarizerAgent
- Processes article content using Google's Gemini Pro AI
- Generates concise, meaningful summaries
- Handles content analysis and key point extraction

### WriterAgent
- Formats content into readable reports
- Supports both Markdown and HTML output
- Implements professional styling and layout

### SenderEmailAgent
- Manages email delivery via Nodemailer
- Handles HTML and plain text formatting
- Implements retry logic and error handling

## 📝 Configuration

The system uses environment variables for configuration. Required variables:

- `SERP_API_KEY`: Your SERPAPI API key
- `GOOGLE_API_KEY`: Your Google Gemini Pro API key
- `Email_User`: Gmail address for sending emails
- `Email_Password`: Gmail app password

## 🚀 Installation and Setup

1. Clone the repository:
   ```
   git clone https://github.com/dyglo/Taf-Agent.git
   cd Taf-Agent
   ```
2. Install dependencies:
   ```
   npm install
   ```
   
3. Create a `.env` file in the root directory with your API keys:
   
## 🧪 Testing

The project includes test suites for all agents. Run specific tests:
```
Run all tests
npm test
Run specific test suite
npm test -- tests/SearchAgent.test.js
npm test -- tests/SummarizerAgent.test.js
npm test -- tests/WriterAgent.test.js
npm test -- tests/SenderEmailAgent.test.js
```


