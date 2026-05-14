show databases;

use kgt_bank;

-- Criando uma tabela
CREATE TABLE conta (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
    saldo DECIMAL,
    senha VARCHAR(6)
);

-- Selecionar a tabela
SELECT * FROM conta;

-- Inserindo dados
INSERT INTO conta (nome, saldo, senha)
VALUES ('Doris', 10, '123');

INSERT INTO conta (nome, saldo, senha)
VALUES ('Um', 3000, '321');

INSERT INTO conta (nome, saldo, senha)
VALUES ('Pedro', 400, '1234');

INSERT INTO conta (nome, saldo, senha)
VALUES ('Pepe', 100, '1234');

-- Apagando dados do banco
DELETE FROM conta WHERE id=3;

-- usuario

use usuario;

create table usuario (
	id int primary key auto_increment
    nome varchar(50)
)