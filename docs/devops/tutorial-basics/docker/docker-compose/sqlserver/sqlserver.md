

```
version: "3.8"
services:
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
  sqlserver_data:
    driver: local
```
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