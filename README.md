# Using GRAPHQL (NodeJS and MongoDB)
![](https://img.shields.io/badge/Author-Alejandro_Fuentes_|_fuentesra@hotmail.com-informational?style=flat&logoColor=white&color=4a4c4d)

## Tools
* nodejs
* npm
* graphql
* mongodb

## How to use this project

**Pre Requeriments**
* Installed [nodeJs][link-nodejs]
* Install [MongoDB][link-mongodb]

**Steps**
1. Clone project inner folder
1. Started MongoDB
1. Install dependencies of project
    ```bash
    npm i
    ```
1. Execute project
    ```bash
    npm start
    ```



# Some tips of projects


[site of Graphql][link-graphql]

APIs are technology to obtain information about some matter.
Small devices (with few resources) usually use this technology.

But when the project grows, it is more difficult to obtain information, because it overloads data that is redundant or not used.

Facebook had this problem, where they build this query language that works together with APIs and has the ability to reduce one call of API to the data that really needed. (React has a great integration with it)

Graphql [support many languages](https://graphql.org/code/), how javascript, java, .net, and so on.



## My server
![](https://img.shields.io/badge/Server-Node.JS-informational?style=flat&logo=node.js&logoColor=white&color=339933)
![](https://img.shields.io/badge/Package_ManagerServer-npm-informational?style=flat&logo=npm&logoColor=white&color=cb3837)
![](https://img.shields.io/badge/Server-npm-informational?style=flat&logo=express&logoColor=white&color=000000)
![](https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=javascript&logoColor=white&color=F7DF1E)
![](https://img.shields.io/badge/Sintaxt-TypeScript-informational?style=flat&logo=typescript&logoColor=white&color=3178c6)

```bash
# create new blank project
npm init
```

to continue, we use a framework of nodejs called `express`.

```bash
npm i express
```

to continue, for make a organization, to create the folder `src`, inner its, one file called `index.js`.

the `express` build a server, that can call the APIs.

First test, I do execute my server using node:

```bash
node src/index.js
```

> NOTE
>
> I use [babel](https://babeljs.io/docs/en/usage) in this project. This action don't have connection with `graphql`, only I do for study:
>
> ```bash
> # is good see in official site, because can be changes in this command
> npm install --save-dev @babel/core @babel/cli @babel/preset-env
>
> # for use babel in node
> npm i @babel/node -D
> ```
>
> add script inner `package.json` for can execute babel with project:
>
> ```json
> "scripts": {
>   "build": "babel src -d dist --source-maps",
>   "start": "babel-node src/index.js"
>  }, 
> ```
>
> I need too this dependencie `plugin-transform-runtime` for when `Babel` compiles moder JavaScript into earlier JavaScript (transpiling), dont convert function async in engines that don't support async functions.
>
> ```bash
> npm install --save-dev @babel/plugin-transform-runtime
> ```
>
> to continue, create file `.babelrc` for add next properties:
>
> ```json
>{
>    "presets": [
>        "@babel/preset-env"
>    ],
>    "plugins": [
>        "@babel/plugin-transform-runtime"
>    ]
>}
>```
>_

> NOTE
>
> I use `nodemon`, is a tool, that in develop mode, restart the server each time that o code is changed
>
> ```bash
> npm i nodemon -D
> ```
> but, need change `package.json`, for one organization of execute
>
> ```json
> "scripts": {
>    "build": "babel src -d dist --source-maps",
>    "start": "nodemon src/index.js --exec babel-node",
>    "serve": "node dist/index.js"
>  }, 
> ```
>
> _

> NOTE
>
> I use `rimraf`, is a tool which enabled clear folder independent of the operating system
>
> ```bash
> npm i rimraf
> ```
> I do use for clear `dist` folder of project. To continue, a some change in `package.json`, for one organization of execute
>
> ```json
> "scripts": {
>    "build": "babel src -d dist --source-maps",
>    "start": "nodemon src/index.js --exec babel-node",
>    "serve": "node dist/index.js",
>    "clean": "rimraf dist"
>  }, 
> ```
>
> _


## GraphQL
![](https://img.shields.io/badge/Tool-GraphQL-informational?style=flat&logo=graphql&logoColor=white&color=e10098)


How this project is in `javascript`, I go to site of [documentation graphql](https://graphql.org/code/#javascript)  that tolk about this language. Ok in this date, is it:

```bash
npm i graphql express-graphql
```

One other tools that I do use is [GraphQL Tools][link-graphql-tools], which enabled build graphql schemas.

```bash
npm i graphql-tools
```

**Schemas and Resolvers**

The `Schema` would be what you can refer to. In it I create the types of data (`typeDef`) that I can query.

```javascript
// file schema.js
import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers';

const typeDefs = `
    type Query{
        hello: String
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});
```

The `Resolvers` is or what can be done when our query arrives.

```javascript
// file resolver.js
export const resolvers = {
    Query: {
        hello: () => {
            return 'Hello, it is my first graphQL query'
        }
    }
};
```

## Data Base : MongoDB
![](https://img.shields.io/badge/DB-MongoDB-informational?style=flat&logo=mongodb&logoColor=white&color=47A248)

Now, I use how example of persistence of datas the [mongodb][link-mongodb], install dependencies

```bash
npm i mongoose
```

> NOTE 
>
> For use mongoDB, need start the service mongod, for it, in windows system, need started mongoDB:
>
> ```bash
> mongod
> ```
>
> in linux system, for start mongoDB
>
> ```bash
> sudo service mongod start
> ```
>_

I create my connectoin to mongoDB in file `database`:

```javascript
import mongoose from "mongoose";

export async function connect(){

    try{
        await mongoose.connect('mongodb://localhost/mongodbgraphql', {
            useNewUrlParser: true
        })
        
        console.log('>>> DB is running');
    }
    catch{
        console.log('>>> Someting goes wrong try start DB');

    }
}
```
<!-- links and references -->
[link-nodejs]: https://nodejs.org/en/
[link-mongodb]: https://www.mongodb.com/
[link-graphql]: https://graphql.org/
[link-graphql-tools]: https://www.graphql-tools.com/
