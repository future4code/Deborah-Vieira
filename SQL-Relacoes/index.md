# Exercicio 1

## A) É uma forma de se ter relação entre tabelas. A tabela que há uma FK, faz referência a um campo da tabela. Normalmente uma chave estrangeira está atrelada ao campo de id;

## B) Criando uma tabela com FK

CREATE TABLE Rating (
id VARCHAR(255) PRIMARY KEY,
comment TEXT NOT NULL,
rate FLOAT NOT NULL,
movie_id VARCHAR(255),
FOREIGN KEY (movie_id) REFERENCES Movie(id)
)
criando avaliações:
INSERT INTO Rating VALUES
("001", "Excelente filme", 10, "003")

## C)

R: Cannot add or update a child row: a foreign key constraint fails; Ele não cria, devido a FK ser uma constraint, ou seja há uma restrição.

## D)

ALTER TABLE Movie DROP COLUMN rating

## E) Bom, ele não apaga,diz que a coluna é desconhecida na clausula, tentei por nome tambem, talvez não fiz a query da forma correta.

Unknown column '“003”' in 'where clause
DELETE from Movie
WHERE id = “003”;
