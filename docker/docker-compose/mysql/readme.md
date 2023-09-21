
## Run bằng file compose:
```sh
docker-compose -f ./docker-compose/mysql/compose-mysql.yml up -d
```
## Stop bằng file compose
```sh
docker-compose -f ./docker-compose/mysql/compose-mysql.yml down
```
## Run bằng stack
```sh
docker stack deploy -c ./docker-compose/mysql/compose-mysql.yml mysql
```
## Link để sử dụng
```sh
Host: IP
Port: 3306
User: root
Pass: root1234
```