# TradeMaster AI

A full-stack trading tools platform built with **Next.js (App Router)** for the frontend and **Node.js/Express** for the backend. Users can browse trading products, add them to a cart, and view an order summary.

---

## Table of Contents

- [Getting Started](#getting-started)
- [Frontend Setup (Next.js)](#frontend-setup-nextjs)
- [Backend Setup (Node.js/Express)](#backend-setup-nodejsexpress)
- [Dependencies](#dependencies)
- [Features](#features)
- [Project Structure](#project-structure)
- [Learn More](#learn-more)
- [Deployment](#deployment)

---

## Getting Started

Clone the repository:

```bash
git clone <your-repo-url>
cd <project-folder>
```

Make sure to install dependencies for both frontend and backend.

---

## Frontend Setup (Next.js)

1. Navigate to the frontend folder (if separate):

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

Frontend is built using **Next.js App Router** and **TypeScript**, with Tailwind CSS for styling. It fetches products from the backend and uses **React Context** for cart state management.

---

## Backend Setup (Node.js/Express)

1. Navigate to the backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:

Create a `.env` file:

```
PORT=5000
MONGO_URI=<your-mongodb-connection-string>
```

4. Start the server:

```bash
npm run dev
```

Backend APIs are available at `http://localhost:5000/api`. Key endpoints:

- `GET /api/product` — Fetch all products.
- `GET /api/cart` — Fetch cart items (optional).
- `POST /api/cart` — Add product to cart (optional).

---

## Dependencies

**Frontend (Next.js)**:

- `react` & `react-dom` — UI rendering
- `next` — App Router and SSR
- `react-hot-toast` — Toast notifications
- `tailwindcss` — Styling
- `typescript` — Type safety

**Backend (Node.js/Express)**:

- `express` — API server
- `mongoose` — MongoDB ODM
- `dotenv` — Environment variables
- `cors` — Cross-origin requests
- `nodemon` (dev) — Auto-restart server

---

## Features

- **Product Listing** — Fetch and display products from backend API.
- **Cart Management** — Add, remove, increase, decrease items using **React Context**.
- **Responsive UI** — Works on both mobile and desktop.
- **Order Summary** — Shows total price and item count.
- **Toast Notifications** — Feedback on cart actions.
- **Persistent Cart** — Saved in `localStorage` so cart survives page reloads.
- **Clean Architecture** — Separation of concerns for components, hooks, and context.

---

## Project Structure

```
/frontend
  /app
    page.tsx            # Main page
    /products           # Product listing page
    /checkout           # Checkout page
  /components
    ProductCard.tsx     # Product UI
    Navbar.tsx          # Navigation
    EmptyCart.tsx       # Empty state
  /context
    cart.context.tsx    # Cart state management
  /hooks
    useProduct.ts       # Custom hook for fetching products
/backend
  server.js             # Express server
  /routes
    product.js          # Product APIs
    cart.js             # Cart APIs
  /models
    productModel.js
    cartModel.js
```

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Express Documentation](https://expressjs.com/)

---

## Deployment

You can deploy the **frontend** to [Vercel](https://vercel.com/) and the **backend** to platforms like **Render**, **Railway**, or **Heroku**.

---

**Notes:**

- Ensure your backend URL is correctly configured in `frontend/hooks/useProduct.ts`.
- Tailwind classes are used extensively for responsive design.
- All cart logic is centralized in a **React Context**, making it reusable across pages.

