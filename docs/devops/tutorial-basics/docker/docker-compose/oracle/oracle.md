
```
version: '3.7'
services:
  database:
    image: store/oracle/database-enterprise:12.1.0.2
    volumes:
      - oradata:/opt/oracle/oradata # persistent oracle database data.
    ports:
      - 1521:1521
volumes:
  oradata:
    driver: local
```
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