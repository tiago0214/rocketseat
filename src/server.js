import http from 'node:http';

const user = []

const server = http.createServer((req, res) => {
    const { method, url } = req;

    if (method === "GET" && url === "/users") {
        return res
            .setHeader("Content-type", "application/json")
            .end(JSON.stringify(user))
    }
    if (method === "POST" && url === "/users") {
        user.push({
            name: "Tiago Souza",
            idade: 29,
            Sexo: "Masculino"
        })

        return res.writeHead(201).end()
    }

    return res.writeHead(404).end();
});


server.listen(3333);