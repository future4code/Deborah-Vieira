# Exercicio 1

### A) ALTER TABLE Actor DROP COLUMN salary;

R: Esse comando altera a tabela Actor excluindo sua coluna salary.

### B) ALTER TABLE Actor CHANGE gender sex VARCHAR(6);

R: Altera o nome da coluna gender para sex e seu tamanho para 6.

### C) ALTER TABLE Actor CHANGE gender gender VARCHAR(255);

R: Altera o nome da coluna gender para gender e seu tamanho para 255.

### D)

R: ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

# Exercicio 2

### A)

UPDATE Actor
SET
name = "Moacyr Franco",
birth_date = "1975-05-28"
WHERE id = "003"

### B)

UPDATE Actor
SET name = "JULIANA PÃES "
WHERE name = "Juliana Paes"

### C)

UPDATE Actor
SET
name = "Moacyr Franco",
birth_date = "1975-05-28",
salary = 600000,
gender = "male"
WHERE id = "005"

### D)Teste, anote e explique o resultado.

0 row(s) affected Rows matched: 0 Changed: 0 Warnings: 0
Bom, não aparece um erro, mas ele não altera nada
porque o registro não existe.
UPDATE Actor
SET
name = "Déborah Vieira"
birth_date = "1990-07-14"
salary = 600000,
gender = "female"
WHERE id = "050"

# Exercicio 3

### A)

R: DELETE FROM Actor WHERE name = "Fernanda Montenegro"

### B)

DELETE FROM Actor WHERE gender = "male" AND salary > 100000000

# Exercicio 4

### A)

R: SELECT MAX(salary) FROM Actor

### B)

R: SELECT MIN(salary) FROM Actor WHERE gender = "female"

### C)

R: SELECT COUNT(\*) FROM Actor WHERE gender = "female"

### D)

R: SELECT SUM(salary) FROM Actor

# Exercicio 5

### A)

SELECT COUNT(\*), gender
FROM Actor
GROUP BY gender
R: Ele conta todos os atores e atrizes e os agrupa por genero.

### B)

R:SELECT id, name FROM Actor ORDER BY name DESC

### C)

R: SELECT name, salary FROM Actor ORDER BY salary

### D)

R: SELECT \* FROM Actor
ORDER BY salary DESC
LIMIT 3;

### E)

R:
SELECT AVG(salary)
FROM Actor
GROUP BY gender

# Exercicio 6

### A)

R: ALTER TABLE Movie ADD playing_limit_date DATE;

### B)

R:ALTER TABLE Movie CHANGE rating rating FLOAT;

### C)

R: UPDATE Movie
SET
playing_limit_date = "2020-12-31"
WHERE id = "001"

UPDATE Movie
SET
playing_limit_date = "2020-09-30"
WHERE id = "002"

### D)

R: DELETE FROM Movie WHERE id = "001"
DELETE FROM Movie WHERE id = "002"
UPDATE Movie
SET synopsis = "Filme velho"
WHERE id = "002"
Não vi erro, ele apenas altera 0 linhas, porque o id passado já não
existe mais na tabela.

# Exercicio 7

### A)

R:SELECT COUNT(\*) FROM Movie WHERE rating > 7.5;

### B)

R: SELECT AVG(rating) FROM Movie;

### C)

R: SELECT COUNT(\*) FROM Movie WHERE playing_limit_date > CURDATE();

### D)

R: SELECT COUNT(\*) FROM Movie WHERE release_date < CURDATE();

### E)

R: SELECT MAX(rating) FROM Movie;

### F)

R: SELECT MIN(rating) FROM Movie;

# Exercicio 8

### A)

R: SELECT \* FROM Movie ORDER BY title;

### B)

R: SELECT \* FROM Movie ORDER BY title LIMIT 5;

### C)

R: SELECT \* FROM Movie
WHERE release_date < CURDATE()
ORDER BY release_date DESC
LIMIT 3;

### D)

R:SELECT \* FROM Movie
ORDER BY rating DESC
LIMIT 3;
