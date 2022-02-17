const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    if (req.url === '/produto') {
        res.end(JSON.stringify({
            message: 'Página de Produto'
        })
        );
    }

    if (req.url === '/usuario') {
        res.end(JSON.stringify({
            message: 'Página de Usuário'
        }))
    }

    res.end(JSON.stringify({
        message: 'Hello World!'
    }));
}).listen(8001, () => console.log("Servidor está rodando na porta 8001"))