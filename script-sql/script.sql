use futebol;

create table jogador (conta
	id int primary key auto_increment,
    nome varchar(50),
    cidade varchar(50),
    salario decimal
);

select * from jogador;

insert into jogador (nome, cidade, salario) values
('Ronaldo Fenômeno', 'Rio de Janeiro', 10000),
("Zinedine Zidane", 'Marselha', 5000),
('Lucas moura', 'São Paulo', 3000);

DELETE FROM jogador WHERE id=4;

update jogador
	set
		nome = "Ronaldo Fenômeno Aposentado",
        cidade = "Belo Horizonte",
        salario = 20000
	where id = 3;
    
update jogador
	set
		nome = "Lucas Moura Aposentado",
        cidade = "Recife",
        salario = 2000
	where id = 5;
    
alter table jogador rename column salario to pagode;

create table titulo (
	id int primary key auto_increment,
    nome varchar(50),
    time varchar(40),
    selecao varchar(40),
    quantidade decimal
)

insert into titulo (nome, time, selecao, quantidade) values
("sla", "bangu", "bangu alguma coisa", 9),
('eunaosei', "botafogo", "AAAAAAAAAAAA", 4),
('nomegenerico', "flamengo", 'tosemideia', 14);

select * from titulo;