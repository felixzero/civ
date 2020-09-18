#!/bin/sh

echo "Making fat JAR..."
cd backend/civ
mvn clean install || exit -1

echo "Releasing front..."
cd ../../frontend
ng build --prod --base-href=/civ/ --deploy-url=http://guilloy.fr/civ
