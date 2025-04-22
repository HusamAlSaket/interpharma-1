// Import Node.js built-in 'http' module to create a server
const { createServer } = require('http');

// Import Node.js built-in 'url' module to parse URL parts
const { parse } = require('url');

// Import the Next.js framework
const next = require('next');

// Define the port to run the server on
// - Use environment variable if available (ex: on hosting server)
// - Otherwise default to 3000 (local development)
const port = process.env.PORT || 3000;

// Determine if we are running in development mode
const dev = process.env.NODE_ENV !== 'production';

// Initialize the Next.js app
const app = next({ dev });

// Get the built-in Next.js request handler
const handle = app.getRequestHandler();

// Prepare the Next.js app (build pages, internal assets, etc.)
app.prepare().then(() => {
  
  // Create a basic HTTP server
  createServer((req, res) => {
    
    // Parse the incoming request URL into path and query params
    const parsedUrl = parse(req.url, true);
    
    // Pass the request to Next.js to handle routing, rendering, static files, API routes, etc.
    handle(req, res, parsedUrl);

  }).listen(port, (err) => { // Start the server and listen on specified port
    
    if (err) throw err; // Crash if there's an error during startup

    // Log success message
    console.log(`> Ready on http://localhost:${port}`);
  });

});
