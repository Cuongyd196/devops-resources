
## Run bằng file compose:
```sh
docker-compose -f ./docker-compose/sqlserver/compose-sqlserver.yml up -d
```
## Stop bằng file compose
```sh
docker-compose -f ./docker-compose/sqlserver/compose-sqlserver.yml down
```
## Run bằng stack
```sh
docker stack deploy -c ./docker-compose/sqlserver/compose-sqlserver.yml sqlserver
```
## Link để sử dụng
```sh
Host: IP
Port: 1433
User: sa
Pass: root@1234
```