```
version: '3'
services:
  mysql:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: secret
      MYSQL_DATABASE: osticket
      MYSQL_USER: osticket
      MYSQL_PASSWORD: secret
    volumes:
      - db:/var/lib/mysql
    restart: always

  osticket:
    image: devinsolutions/osticket:latest
    environment:
      MYSQL_HOST: mysql
      MYSQL_DATABASE: osticket
      MYSQL_USER: osticket
      MYSQL_PASSWORD: secret
    volumes:
      - data:/var/www
    ports:
      - 8080:80
    restart: always
    depends_on:
      - mysql
volumes:
  data:
    driver: local
  db:
    driver: local
```
## docker compose osticket