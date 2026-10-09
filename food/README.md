# ReactFood

A full-stack food ordering web app built with React on the frontend and Express on the backend. Users can browse meals, add items to a cart, and complete a checkout form to place an order.

This project is organized as a Vite React app with a small Express API for serving menu data and handling order submissions.

## Features

- Browse available meals from a live API
- Add and remove items from the cart
- Track cart quantities and totals
- Submit customer order details
- Responsive UI for a storefront-style experience
- Clean state management using React context

## Tech Stack

- React 19
- Vite
- JavaScript
- Express.js
- Node.js
- CSS

## Project Structure

```text
food/
├── backend/
│   ├── data/
│   │   ├── available-meals.json
│   │   └── orders.json
│   ├── app.js
│   ├── package-lock.json
│   └── package.json
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── store/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── App.jsx
├── index.css
├── index.html
├── main.jsx
├── package-lock.json
├── package.json
├── vite.config.js
├── .gitignore
├── .oxlintrc.json
└── README.md
```

## Getting Started

If the repository is opened at the root, first navigate into the project folder:

```bash
cd food
```

### 1. Install frontend dependencies

```bash
npm install
```

### 2. Install backend dependencies

```bash
cd backend
npm install
cd ..
```

## Run the App

Start the backend API in one terminal:

```bash
cd backend
npm start
```

Start the frontend app in another terminal:

```bash
cd food
npm run dev
```

Then open the local URL provided by Vite in your browser.

## Backend API

The backend runs on port 3000 and exposes:

- GET /meals
  - Returns the list of available meals
- POST /orders
  - Accepts order data from the frontend and saves it to the orders file

## Frontend Scripts

From the `food` directory:

```bash
npm run dev
```

Runs the development server.

```bash
npm run build
```

Builds the production bundle.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs the linter for the project.

## Notes

- The frontend fetches meals from `http://localhost:3000/meals`
- Orders are submitted to `http://localhost:3000/orders`
- The backend also serves static files from its `public` folder

## License

This project is provided for educational and personal use. Add a license file if you plan to distribute it publicly.