# stack
node
babel
react
react-pdf
docker


## To Reproduce the issue, run the docker container, open stats to watch the memory used, then use postman to hit the endpoints that tiger the PDF rendering.

1 - Have docker and node installed.

2- Build image:

- `docker build -t  react-pdf-test .`


3- run the image:

- `docker run -p 3050:3050/tcp --name react-pdf-test  react-pdf-test:latest`

4 - To see memory usage, run the following command, then look at the stats of the container named `react-pdf-test`: 
- `docker stats`

5- Endpoints:
  to generate A pdf and get it as a response: method: `any`, `localhost:3050/render`;
  to generate A pdf and store it in the docker container: method: `any`, `localhost:3050/saveFile`;

Observe how memory keeps rising after every request and never gets down to the point it was before the request was made.


