import Stripe from "stripe";
// "!" Mostra para o typescript que essa variável sempre vai ter um valor.
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15', // Qualquer que sugerir ctrl + space
  appInfo: {
    name: 'Ignite Shop', // Fica um log no dashboard do Stripe e vai aparecer esse nome.
  }
})