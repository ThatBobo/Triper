# Triper

Triper is a lightweight, session‑based payment system designed for developers who want a simple, fast way to accept payments without accounts, dashboards, or complex setup.  
Create a session on your backend → send the user to checkout → done.

---

## 🚀 Features

- No account or onboarding required  
- Simple session‑based payment flow  
- Works with any backend (Node, Python, Go, PHP, etc.)  
- Drop‑in React components  
- Zero configuration  
- Works with Cloudflare Tunnel or any public endpoint  

---

## 📦 Installation

~~~~bash
npm install triper
~~~~

or

~~~~bash
yarn add triper
~~~~

---

## 🧩 Usage

### React Example

~~~~tsx
import { TriperButton } from "triper";

export default function Example() {
  return (
    <TriperButton
      session="triper_sess_123"
      amount="$25"
    />
  );
}
~~~~

This will redirect the user to your hosted payment page:

~~~~text
/pay/:session
~~~~

---

## 🧱 Components

### `<TriperButton />`

A simple redirect‑based payment button.

### Props

| Prop      | Type       | Description |
|-----------|------------|-------------|
| session   | string     | The payment session ID |
| amount    | string     | Displayed amount (e.g. "$25") |
| children  | ReactNode  | Optional custom button content |

### Example with custom content

~~~~tsx
<TriperButton session="triper_sess_456" amount="$10">
  Buy Now
</TriperButton>
~~~~

---

## 🧪 Demo

Live demo hosted on GitHub Pages:

~~~~text
https://thatbobo.github.io/Triper/
~~~~

---

## 🛠 Backend Example

Your backend should create a session and expose a route like:

~~~~ts
app.get("/pay/:session", (req, res) => {
  const sessionId = req.params.session;

  // Lookup session in your DB
  // Redirect to your payment processor
  // Or render a hosted checkout page

  res.send(`Processing payment for session ${sessionId}`);
});
~~~~

You can expose this through Cloudflare Tunnel or any public URL.

---

## 📁 Project Structure

~~~~text
src/
  components/
    ui/
      button.tsx      # TriperButton component
  pages/
    Home.tsx          # Demo landing page
  App.tsx             # Router setup
  main.tsx            # React entry point
  triper.js           # Library entry shim
~~~~

---

## 🧭 Roadmap

- Hosted checkout UI  
- Session creation API helpers  
- Webhooks  
- Modal‑based checkout  
- Vanilla JS version  
- NPM package publishing  

---

## 📄 License

MIT License.  
Feel free to use, modify, and build on Triper.
