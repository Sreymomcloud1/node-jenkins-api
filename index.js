const express = require('express');
const app = express();
const PORT = 3000;

// Task 4: Get API
app.get('/', (req, res) => {
    res.send('Hello from my EC2 instance! Pipeline is working.');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});

// Task 14: Post API
app.post('/data', (req, res) => {
    res.json({ message: "Post successful!" });
});