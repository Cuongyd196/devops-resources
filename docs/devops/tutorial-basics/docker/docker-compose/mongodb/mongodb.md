
```
version: '3.7'
services:
  mongodb:
    image: mongo:4.4
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: root1234
    ports:
      - 27017:27017
    networks:
      - mongo_net
    volumes:
      - mongodb_data:/data/db
      - config_mongodb:/data/configdb
    command: mongod --auth --wiredTigerCacheSizeGB 1.5
    restart: unless-stopped

networks:
  mongo_net:

volumes:
  mongodb_data:
    driver: local
  config_mongodb:
    driver: local
```

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