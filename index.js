const http = require('http');

function greet(name) {
  return `Hello, ${name}! Welcome to the CI/CD Pipeline!`;
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(greet('World'));
});

const PORT = 3000;
if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = { greet };
