
PROJECT_NAME="picture-challenge"
DOCKER_USERNAME="prabhakarpujeri"
# export such that its passed to shell functions for Docker to pick up.
export PROJECT_NAME
export DOCKER_USERNAME
export HOST_UID


.PHONY: clean build run


build:
  @echo 'buildig  Image'
  rm -rf app/build
  cd app; npm run-script build
  docker-compose build

push:
  docker-compose push

clean:
  @echo "cleaning"

run:
  @echo 'runing app'
  docker-compose stop
  docker-compose up -d



