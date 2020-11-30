install:
	cd frontend && npm i

start-backend:
	cd backend && ./mvnw spring-boot:run
    
start-frontend:
	cd frontend && npm start

test-backend:
	cd backend && ./mvnw test
	
test-frontend:
	cd frontend && npm test

load-game-data:
	cat game-data.json | curl -X PUT -u admin:password -H "Content-Type: application/json" --data-binary @- http://localhost:8080/game-data

clean:
	rm -rf backend/target/*
	rm -rf frontend/dist/*
