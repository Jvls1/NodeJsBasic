CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Lucas",
    "email1@teste.com",
    20
);

SELECT * FROM usuarios WHERE idade = 18;

DELETE FROM usuarios WHERE nome = 'Lucas';

UPDATE usuarios SET nome = "Test name" WHERE nome = "João";