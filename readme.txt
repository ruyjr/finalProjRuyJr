PASSOS DO PROJETO

 1. Instalei o Node.js:
Primeiro, instalei o Node.js e o npm (Node Package Manager) na minha máquina a partir do site oficial [nodejs.org](https://nodejs.org/).

 2. Criei um novo projeto Node.js:
Criei um novo diretório para o projeto e naveguei até ele usando o terminal:
```bash
mkdir finalProjectRuyJr
cd finalProjectRuyJr
```

 3. Inicializei um novo projeto Node.js:
Dentro do diretório do projeto, executei o comando para criar um novo arquivo `package.json`:
```bash
npm init -y
```

 4. Instalei o pacote Express:
Apesar de não ter mencionado anteriormente, decidi também instalar o Express para a criação da aplicação web:
```bash
npm install express
```
    4.1 - Criei o arquivo "app.js" na pasta do projeto.
    4.2 - Dentro do arquivo "app.js" codei a variável "express" para associar ao pacote express.
    4.3 - Criei a variável "app" e associei a variável "express"
    4.4 - Criei uma escuta pra porta 3000 para o arquivo "app.js" e projetei um print para identificar que o servidor estaria funcionando.
    4.5 - No terminal testei o output para verificar o funcionamento do servidor com o comando "node app" para rodar o arquivo app.js.


5. Instalei o nodemon como dependência para iniciar automaticamente o servidor quando qualquer alteração é detectada. Isso é particularmente útil durante o desenvolvimento, pois elimina a necessidade de parar e reiniciar manualmente o servidor toda vez que uma mudança é feita no código.
```bash
npm install -g nodemon
```
    5.1 - Alterei o package.json em "script": para ao invés de "test" ser "start" e alterei o script "echo \"Error: no test... para "nodemon.app".
     Obs. Não pode comentar o script antigo, pois não se anula! Tem que substituir mesmo!

6. Instalei o ejs:
Em seguida, instalei o EJS para poder criar templates dinâmicos:
```bash
npm install ejs
```
    6.1 - Criei a pasta views;
    6.2 - Criei o arquivo "Home.ejs" e criei um html para o engine do EJS apresentar substituindo a rota original.
    

