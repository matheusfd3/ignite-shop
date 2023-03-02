<h1 align="center">
  <img alt="" title="logo" src="src/assets/logo.svg" />
</h1>

<p>
  Aplicação de e-commerce de camisas para implementar funcionalidades e serviços de pagamento online utilizando Next.js + Stripe.
</p>

## Construído com
- [Next.js](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Stitches](https://stitches.dev/)
- [Keen Slider](https://keen-slider.io/)
- [Stripe](https://stripe.com/br)
- [Axios](https://axios-http.com/ptbr/docs/intro)

## Primeiro Acesso

Clone o projeto

```bash
  git clone https://github.com/matheusfd3/ignite-shop.git
```

Entre no diretório do projeto

```bash
  cd ignite-shop
```

Instale as dependências

```bash
  npm install
```

Você vai precisar configurar [Variáveis de Ambiente](https://nextjs.org/docs/basic-features/environment-variables), criar/configurar uma conta [Stripe](https://stripe.com/br) com seus produtos e preços.

```text
  NEXT_URL=http://localhost:3000
  STRIPE_PUBLIC_KEY=... // Stripe vai fornecer essa chave.
  STRIPE_SECRET_KEY=... // Stripe vai fornecer essa chave
```

Inicie o servidor

```bash
  npm run dev
```

## Screenshots

### Home
![App Screenshot](https://github.com/matheusfd3/github-blog/blob/main/.github/home.png)

### Product
![App Screenshot](https://github.com/matheusfd3/github-blog/blob/main/.github/product.png)

### Stripe
![App Screenshot](https://github.com/matheusfd3/github-blog/blob/main/.github/stripe.png)

### Success
![App Screenshot](https://github.com/matheusfd3/github-blog/blob/main/.github/success.png)
