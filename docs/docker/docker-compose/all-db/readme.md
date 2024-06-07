
## Run bằng file compose:
```sh
docker-compose -f ./docker-compose/all-db/compose-db.yml up -d
```
## Stop bằng file compose
```sh
docker-compose -f ./docker-compose/all-db/compose-db.yml down
```
## Run bằng stack
```sh
docker stack deploy -c ./docker-compose/all-db/compose-db.yml mongodb
```
