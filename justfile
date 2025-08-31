import? 'override.just'

@start:
  docker compose -f devops/docker-compose.yml --project-name "taival" up --pull always --build -d

stop:
  docker compose -f devops/docker-compose.yml --project-name "taival" down

restart:
  just stop
  just start
