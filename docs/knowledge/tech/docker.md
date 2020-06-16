# Docker Cheatsheet

---
description: Some useful docker commands
---

# Docker Cheatsheet

Some useful docker commands
- [Docker](#docker)
- [Docker Compose](#docker-compose)
- [Docker Machine](#docker-machine)
    - [Create new server](#create-new-server)
    - [Update](#update)
    - [See Logs](#see-logs)
    - [Remove server](#remove-server)

## Docker

```sh
# Create
docker build -t appname .

# Start
docker run appname

# List all containers
docker ps -a -q

# Stop all containers
docker stop $(docker ps -a -q)

# Kill all containers
docker kill $(docker ps -q)

# Remove all containers
docker rm $(docker ps -a -q)

# Remove all docker images
docker rmi $(docker images -q)

# Prune all volumes
docker system prune -a -f --volumes

# Enter into interative command line for a given container with environment variables loaded.
docker exec -it CONTAINER_NAME sh
```

### Cleanup

``` bash
# delete volumes
docker volume rm $(docker volume ls -qf dangling=true)

## remove docker images
docker volume rm $(docker volume ls -f 'dangling=true')

# remove images without tag
docker images | grep "none"
docker rmi $(docker images | grep "none" | awk '/ / { print $3 }')
```

### Using secrets for building an image

Example: I want to clone a private github repo and do a dev install inside the image.

I need a github access token for that.

1. Get a github access token and store it in `~/.bash_profile`

``` bash
export GITHUB_TOKEN="12345"
```

2. In the Dockerfile, access the token through `ARG`

``` docker
ARG github_token

RUN git config --global url."https://${github_token}:@github.com/".insteadOf "https://github.com/"
RUN git clone https://github.com/<user_name>/<repo_name>.git
```

3. Feed `docker build` with the environment variable.

``` bash
docker build --build-arg github_token=$GITHUB_TOKEN ...
```

## Docker Compose

```sh
# Start
docker-compose up

# Start detached
docker-compose up -d

# List
docker-compose ps

# Rebuild
docker-compose up --force-recreate --build
```

## Docker Machine


#### Create new server

```sh
# Override default profile
AWS_ACCESS_KEY_ID=$(aws --profile PROFILE_NAME configure get aws_access_key_id)
AWS_SECRET_ACCESS_KEY=$(aws --profile PROFILE_NAME configure get aws_secret_access_key)
docker-machine create \
  --driver amazonec2 \
  --amazonec2-region ap-southeast-1 \
  --amazonec2-open-port 3001 \
  --amazonec2-access-key $AWS_ACCESS_KEY_ID \
  --amazonec2-secret-key $AWS_SECRET_ACCESS_KEY \
  --amazonec2-instance-type t2.nano \
  machine-name

docker-machine ls # check that it exists

eval $(docker-machine env machine-name) # attach to machine
docker-compose up -d # deploy on machine
eval "$(docker-machine env -u)" # attach to local again
```

#### Update

```sh
eval $(docker-machine env machine-name)   # attach to machine
docker-compose build --no-cache           # deploy on machine
docker-compose up -d                      # make sure it's up and reloads config
eval "$(docker-machine env -u)"           # attach to local again
```

This will destroy the redis instance: `docker-compose up --force-recreate`

#### See Logs

```sh
eval $(docker-machine env machine-name) # attach to machine
docker ps # see list of machines
docker logs __ID__ # see logs
eval "$(docker-machine env -u)" # attach to local again
```

#### Remove server

```sh
docker-machine rm machine-name
```