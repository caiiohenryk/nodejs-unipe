import express from 'express';

const server = express();
const port = 5000;

server.get("/livro", (request, response)=>{
    response.send(200, {
        titulo:"Harry Potter e a Pedra Filosofal",
        qtdPaginas: 264,
        preco: 48,
        autor: "J.K Rowling"
    });
});

server.get("/aluno", (request, response)=>{
    response.send(200, {
        nome:"João Node",
        matricula:"123456",
        turma:"A",
        disciplinas:["Aplicações para Internet", "Programação Web", "Sistemas Operacionais"]
    });
});

server.get("/alunos", (request, response)=>{
    response.send(200, {
        alunos: [
            {
                nome:"Caio",
                matricula:"14123",
                notas:[6,9,10]
            },
            {
                nome:"Cesar",
                matricula:"24123",
                notas:[10,9,10]
            }
        ]
    });
});

server.listen(port, ()=>{
    console.log(`Servidor aberto no port ${port}`);
});