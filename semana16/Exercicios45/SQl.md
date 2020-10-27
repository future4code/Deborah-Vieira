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
