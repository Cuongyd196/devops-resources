
## Run bằng file compose:
```sh
docker-compose -f ./docker-compose/mongodb/compose-mongodb.yml up -d
```
## Stop bằng file compose
```sh
docker-compose -f ./docker-compose/mongodb/compose-mongodb.yml down
```
## Run bằng stack
```sh
docker stack deploy -c ./docker-compose/mongodb/compose-mongodb.yml mongodb
```
## Link để sử dụng
```sh
mongodb://root:root1234@<địa chỉ IP>:27017/admin?connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-256

mongodb://root:root1234@localhost:27017/admin?connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-256
```