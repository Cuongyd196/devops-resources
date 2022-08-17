
## Run bằng file compose:
```sh
docker-compose -f ./docker-compose/oracle/oracle.yml up -d
```
## Stop bằng file compose
```sh
docker-compose -f ./docker-compose/oracle/oracle.yml down
```
## Run bằng stack
```sh
docker stack deploy -c ./docker-compose/oracle/oracle.yml oracle
```
## Link để sử dụng
```sh
```