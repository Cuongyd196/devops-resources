
```
version: '3.8'

services:
  mysql:
     image: mysql:8
     restart: unless-stopped
     ports:
      - target: 3306
        published: 3306
        mode: host
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

volumes:
    mysql_data:
      driver: local
```



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