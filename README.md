# curso-typescript

<!-- 
npm init -y
npm i
npm i -D typescript ts-node nodemon
npx tsc --init

CONFIG PADRAO tsconfig.ts
{
  "compilerOptions": {
    "outDir": "dist",
    "esModuleInterop": true,
    "module": "CommonJS",
    "moduleResolution": "Node",
    "baseUrl": "src",
    "paths": {
      "@/*": [
        "*"
      ]
    }
  },
  "ts-node": {
    "esm": true
  },
}

SCRIPTS
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "nodemon src/index.ts"

DEPLOY
Extra (Importante): Caso opte por usar este recurso, é necessário alterar o script de build! Faça a instalação do pacote tsc-alias (npm i -D tsc-alias) e altere o script de build para: tsc && tsc-alias. Pronto!
 -->