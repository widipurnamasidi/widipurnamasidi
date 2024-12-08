const http = require("http");

function requestListener(request, response) {
  response.setHeader("Content-Type", "application/json");

  if (request.method !== "GET") {
    response.statusCode = 405;
    response.end(JSON.stringify({ message: "Method Not Allowed" }));
    return;
  }

  if (request.url === "/") {
    response.statusCode = 200;
    response.end(JSON.stringify({ message: "Halaman Home" }));
    return;
  }

  if (request.url === "/articles") {
    response.statusCode = 200;
    response.end(
      JSON.stringify({
        message: "Halaman Articles",
        articles: ["Articles 1", "Articles 2", "Articles 3"],
      })
    );
    return;
  }

  response.statusCode = 200;
  response.end(JSON.stringify({ message: "Hello Widi Purnama Sidi" }));
}

const server = http.createServer(requestListener);

const PORT = 9090;
server.listen(PORT, () => {
  console.log(`Server ini berjalan pada http://localhost:${PORT}`);
});
