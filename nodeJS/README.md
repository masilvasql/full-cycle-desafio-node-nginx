### Comando inicial
docker run --rm -it -v E:\Estudo\Full-Cycle\Curso-Full-Cycle\Docker\exemplo-com-nodeJS\:/usr/src/app -p 3000:3000 node:15 bash

### build da imagem
docker build -t masilvadocker/hello-express .

### rodando a imagem 
docker run -p 3000:3000 masilvadocker/hello-express

### gerando build com outro dockerfile
docker build -t masilvadocker/hello-express . -f .\Dockerfile.prod