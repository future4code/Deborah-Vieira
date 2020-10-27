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
