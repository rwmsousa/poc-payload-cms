up-d:
	@docker-compose up -d
	
up:
	@docker-compose up

down:
	@docker-compose down

build:
	@docker-compose build

run:
	@docker run -d -p 3000:3000 cms

stop:
	@docker stop $(shell docker ps -q)

restart:
	@docker restart $(shell docker ps -q)

logs:
	@docker-compose logs -f

exec-db:
	@docker exec -it cms_db_1 bash

exec-app:
	@docker exec -it cms_app_1 bash

prune-db:
	@docker exec -it cms_db_1 bash -c "mysql -u root -p123456 -e 'DROP DATABASE cms;'"

prune-app:
	@docker exec -it cms_app_1 bash -c "rm -rf /app/node_modules"

clean:
	@docker system prune -a