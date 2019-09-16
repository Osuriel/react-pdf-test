# stack
node
babel
react
react-pdf
docker

1 - Have docker and node installed.

2- Build image run:

- `docker build -t  react-pdf-test .`


3- run the image:

- `docker run -p 3050:3050/tcp --name react-pdf-test  react-pdf-test:latest`

4 - To see memory usage, run the following command, then look at the stats of the container named `react-pdf-test`: 
- `docker stats`


