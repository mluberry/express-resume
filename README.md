# Express App

## Docker

### Install

```bash
$ brew install docker-machine docker docker-compose
$ docker-machine create --driver virtualbox --virtualbox-memory "4096" --virtualbox-cpu-count "4" --virtualbox-disk-size "40000" dev
$ docker-machine start dev
$ eval "$(/usr/local/bin/docker-machine env dev)"
$ docker-machine ls
$ docker-machine env dev
```

### Start

```bash
$ docker-machine start dev
$ docker-compose up -d
```

URL : http://192.168.99.100:3000

### Basic commands

```
$ docker-compose build
$ docker-compose up -d
$ docker-compose stop
$ docker-compose logs [container]
```

Remove containers

``$ docker-compose rm [container]``

Remove containers and volumes

``$ docker-compose rm -v [container]``

Current container

``$ docker exec -it project_app_1 bash``

Create temporary container

``$ docker-compose run --entrypoint bash --rm app``
