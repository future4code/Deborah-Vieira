# Exercicio 1

#### _CRIANDO A TABELA ATOR E SEUS CAMPOS_

**_CREATE TABLE Actor (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR (255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);_**

A-R: O comando VARCHAR, significa que o campo pode receber uma string, ou seja letras. O Date é usando para
campos de datas. A PRIMARY KEY informa que esse campo deve ser único para cada ator, e o NOT NULL informa
que os campos não devem ser nulos.

B-R: SHOW DATABASES mostra todos os DB que temos e o SHOW TABLE mostra suas tabelas.

C-R: O DESCRIBE Actor mostra todos os campos que a tabela Actor tem.

# Exercicio 2

#### INSERINDO DADOS NA TABELA

INSERT INTO Actor (id, name, salary, birth_date,gender)
VALUES(
"001",
"Tony Ramos",
400000,
"1948-08-25",
"male"
);

A-R: criando uma atriz

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000000,
"1963-08-23",
"female"
)

B-R: ERRO => Entrada duplicada '002' para a chave 'PRIMARY'
Ocorreu porque esse id já existe em outro item da tabela, e porque o campo
de id foi "tipado" como chave primária, ou seja, deve ser único.

C-R: ERRO => A contagem de colunas não corresponde ao valor de correspondência na linha 1
Ou seja, está faltando declarar outros campos da tabela dentro do ().
Corrigido:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"003",
"Fernanda Montenegro",
300000,
"1929-10-19",
"female"
);

D-R: ERRO => O campo 'nome' não tem um valor padrão
Nessa query o campo nome não foi passado, já que o tipamos que seu valor não seria nulo
ele reclama a falta dessa propriedade.
Corrigido:INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"004",
"Thaís Araujo",
400000,
"1949-04-18",
"female"
);

E-R: ERRO => Valor de data incorreto : '1950' para a coluna 'data de nascimento'
Faltou as "", já que a data é uma string.
Corrigido: INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"005",
"Juliana Paes",
719333.33,
"1979-03-26",
"female"
);

F: Atores criados
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"006",
"Fernanda Montenegro",
300000,
"1929-10-19",
"female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"007",
"Antônio Fagundes",
400000,
"1949-04-18",
"male"
);

# Exercicio 3

A-R: SELECT \* FROM Actor where gender="female"

B-R:SELECT salary from Actor where name = "Tony Ramos"

C-R: ERRO => SELECT \* FROM Actor where gender="invalid", nenhum campo gender foi correspondente, porque todos são válidos e tipados com null.

D-R: SELECT id, name, salary from Actor WHERE salary < 500000;

E-R: ERRO => Coluna desconhecida 'nome' na 'lista de campos' , o nome do campo estava errado.
SELECT id, name from Actor WHERE id = "002"

# Exercicio 4

A-R: SELECT \* FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
Ela seleciona da tabela Actor, os nomes que inicam com A ou J, e o salário seja maior que 300000.

B-R: SELECT \* FROM Actor
WHERE (name NOT LIKE "A%" OR name LIKE "J%") AND salary > 350000

C-R: SELECT _ FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%"
D:R:SELECT _ FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
AND salary BETWEEN 350000 AND 900000;

# Exercicio 5

A-R: CREATE TABLE Movie (
id VARCHAR(255) PRIMARY KEY,
title VARCHAR(255) NOT NULL UNIQUE,
synopsis TEXT NOT NULL,
release_Date DATE NOT NULL,
rating INT NOT NULL
);
Ela cria a tabela de filmes e seus campos com os respectivos tipos.
O tipo TEXT armazena mais caracteres, recomendado em textos um pouco longos.

B-R: INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);

C-R: INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);

D-R: INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);

E-R: INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
"004",
"Minha Mãe É uma Peça",
"Hermínia Amaral (Paulo Gustavo) é uma dona de casa de meia idade, divorciada do marido (Herson Capri) que a trocou por uma mulher mais jovem, Soraya (Ingrid Guimarães). Hiperativa, não larga o pé de seus filhos Marcelina (Mariana Xavier) e Juliano (Rodrigo Pandolfo), sem dar-se conta de que já estão bem grandinhos. Um dia, após descobrir que consideram-na uma chata, resolve sair de casa sem avisar para ninguém, deixando todos, de alguma forma, preocupados com o que teria acontecido. Mal sabiam que ela havia ido visitar a querida tia Zélia (Suely Franco), para desabafar sobre as suas tristezas do presente e recordar os bons tempos do passado.",
"2013-06-21",
9
);

# Exercicio 6

A-R:SELECT id, title, rating FROM Movie WHERE id = "003";

B-R:SELECT \* FROM Movie WHERE title ="Dona Flor e Seus Dois Maridos";

C-R:SELECT id, title, synopsis FROM Movie WHERE rating >= 7;

# Exercicio 7

A-R:SELECT \_ FROM Movie
WHERE title LIKE "%vida%";

B-R:SELECT \_ FROM Movie WHERE (title LIKE "%mae%" or synopsis LIKE "%herminia%" )

C-R: SELECT \* FROM Movie WHERE release_Date < "2019-05-04"

D-R:SELECT \* FROM Movie WHERE
release_Date < "2020-05-04" AND (title LIKE "%dona%" or synopsis LIKE "%HERM%" )
AND rating > 7
