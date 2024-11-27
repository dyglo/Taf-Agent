const winston = require('winston');

// Define log format
const logFormat = winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
        return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    })
);

// Create logger instance
const logger = winston.createLogger({
    format: logFormat,
    transports: [
        // Console logging
        new winston.transports.Console({
            level: 'info'
        }),
        // File logging
        new winston.transports.File({
            filename: 'logs/error.log',
            level: 'error'
        }),
        new winston.transports.File({
            filename: 'logs/combined.log'
        })
    ]
});

module.exports = logger;
