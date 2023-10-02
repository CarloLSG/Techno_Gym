#  TechnoGym

This template should help get you started developing with Vue 3 in Vite.

Crear proyecto:
npm init vue@latest

Para la solución de ete proyecto, se instalaron las siguientes dependencias:

npm install primevue@latest --save

npm install primeicons --save

npm install primeflex --save

npm install axios

npm install axios@^1.3.5

npm install primeflex@^3.3.0

npm install primeicons@^6.0.1

npm install primevue@^3.26.1

De la misma manera, se ejecutaron los comandos:
npm i json-server
cd server (Para ello resultó necesario crear la carpeta server debajo de public, la cual contiene el archivo routes.json, con las siguientes líneas {  "/api/v1/*" : "/$1" } y el archivo db.json)
json-server --watch db.json --routes routes.json

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
