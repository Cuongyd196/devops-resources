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
    volumes:
      - mongodb_data:/data/db
      - config_mongodb:/data/configdb
    command: mongod --auth --wiredTigerCacheSizeGB 1.5
    restart: unless-stopped
  
  mysql:
     image: mysql:8
     restart: unless-stopped
     ports:
      - 3306:3306
     volumes:
       - mysql_data:/var/lib/mysql
     command: [
        '--default_authentication_plugin=mysql_native_password',
        '--character-set-server=utf8mb4',
        '--collation-server=utf8mb4_unicode_ci'
     ]
     environment:
       MYSQL_ROOT_PASSWORD: root1234
       MYSQL_DATABASE: dbdev
       MYSQL_USER: dbdev
       MYSQL_PASSWORD: dev123

  sqlserver:
    image: "mcr.microsoft.com/mssql/server"
    environment:
      SA_PASSWORD: "root@1234"
      ACCEPT_EULA: "Y"
    restart: unless-stopped
    ports:
      - 1433:1433
    volumes:
      - sqlserver_data:/var/opt/mssql
      

volumes:
  mongodb_data:
    driver: local
  config_mongodb:
    driver: local
  sqlserver_data:
    driver: local
  mysql_data:
    driver: local
```

## Run bằng file compose:
```sh
docker-compose -f ./docker-compose/all-db/compose-sqlserver-mysql-mongo.yml up -d
```
## Stop bằng file compose
```sh
docker-compose -f ./docker-compose/all-db/compose-sqlserver-mysql-mongo.yml down
```
## Run bằng stack
```sh
docker stack deploy -c ./docker-compose/all-db/compose-sqlserver-mysql-mongo.yml db
```
