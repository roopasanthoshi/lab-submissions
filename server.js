const express = require('express');

const app = express();

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to Node.js and Express Server');
});

// About route
app.get('/about', (req, res) => {
    res.json({
        name: 'Mandava Roopa Santhoshi',
        section: 'AIML-2B-207'
    });
});

// Time route
app.get('/time', (req, res) => {
    res.send(new Date().toString());
});

// 404 handler for unknown routes
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

// Render-compatible port configuration
const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Express server running on port ${PORT}`);
});