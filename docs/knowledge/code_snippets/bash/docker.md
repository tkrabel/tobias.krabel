# Docker

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