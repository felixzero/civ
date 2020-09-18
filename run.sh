#!/bin/sh

cd backend
docker-compose up --build &

cd civ
./mvnw spring-boot:run &

cd ../../frontend
ng serve || exit -1
