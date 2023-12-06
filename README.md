# Fortnite Shop

A "[Fortnite Shop](https://fortniteshop.vercel.app/)" é uma aplicação que fornece informações sobre os itens disponíveis na loja do jogo Fortnite para o dia atual. A API utiliza a plataforma [FortniteAPI](https://fortniteapi.io/) para obter os dados necessários.

## Configuração

Antes de utilizar a API, é necessário configurar a chave de API fornecida pelo FortniteAPI. Siga os passos abaixo:

1. Acesse [https://fortniteapi.io/](https://fortniteapi.io/) e crie uma conta.
2. Após criar a conta, obtenha sua chave de API.
3. Abra o arquivo `shared/axios/api.ts` no seu projeto e localize a variável `API_KEY`.
4. Substitua o valor de `API_KEY` pela chave de API que você obteve.

## Instalação

Certifique-se de ter o Node.js instalado em seu sistema. Em seguida, execute os seguintes comandos no terminal:

```bash
npm install
npm run dev
```

Após configurar a chave de API e iniciar a aplicação, você pode acessar o projeto em http://localhost:5173/

## Licença
MIT
