```
version: '3.3'

services:
  db:
     image: mysql:5.7
     volumes:
       - db_data:/var/lib/mysql
     restart: always
     environment:
       MYSQL_ROOT_PASSWORD: root1234
       MYSQL_DATABASE: wordpress
       MYSQL_USER: root
       MYSQL_PASSWORD: root1234
       
  wordpress:
     depends_on:
       - db
     image: wordpress:latest
     ports:
       - 8000:80
     restart: always
     environment:
       WORDPRESS_DB_HOST: db:3306
       WORDPRESS_DB_USER: root
       WORDPRESS_DB_PASSWORD: root1234
       WORDPRESS_DB_NAME: wordpress
     volumes:
      - wordpress:/var/www/html
    
  phpmyadmin:
       image: phpmyadmin/phpmyadmin
       restart: always
       ports:
         - 3333:80
       environment:
         PMA_HOST: db
         MYSQL_ROOT_PASSWORT: root1234
volumes:
    wordpress:
    db_data:

```