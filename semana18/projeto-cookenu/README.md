# USUÁRIOS CADASTRO

id,
name,
email,
password senha > 6 digitos

**Método:** POST
**Path:** `/signup`

**Entradas:**

Body

```json
{
  "name": "Alice",
  "email": "alice@lbn.com",
  "password": "123456"
}
```

**Saídas**

Body

```json
{
  "access_token": "token de acesso"
}
```

# TAREFAS

id,
title,
description,
deadline,
status: "to_do" || "doing" || "done",
author,
assingnees

# QUERIES

CREATE TABLE cookenu_users (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
password(255)
);

---

CREATE TABLE to_do_list_tasks (
id VARCHAR(64) PRIMARY KEY,
title VARCHAR(64) NOT NULL,
description VARCHAR(1024) DEFAULT "No description provided",
deadline DATE,
author_id VARCHAR(64),
status ENUM ("TO_DO", "DOING", "DONE") DEFAULT "TO_DO",
FOREIGN KEY (author_id) REFERENCES to_do_list_users(id)
)

CREATE TABLE to_do_list_assignee (
task_id VARCHAR(64),
assignee_id VARCHAR(64),
PRIMARY KEY (task_id, assignee_id),
FOREIGN KEY (task_id) REFERENCES to_do_list_task(id),
FOREIGN KEY (assignee_id) REFERENCES to_do_list_user(id)
)

SELECT task.\* , nickname FROM to_do_list_task AS task
JOIN to_do_list_user AS user
ON author_id = user.id;
