# NirmanNext Website

![NirmanNext Banner](https://img.shields.io/badge/NirmanNext-Construction%20Simplified-orange?style=for-the-badge)

[![React](https://img.shields.io/badge/React-18-blue?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5-purple?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Live Site:** [https://www.nirmannext.com/](https://www.nirmannext.com/)

## 🏗️ About The Project

**NirmanNext** is India's premier digital platform transforming the construction materials industry. We bridge the gap between manufacturers and the end-users—builders, retailers, and consumers—by creating a seamless, transparent, and efficient supply chain.

Headquartered in Lucknow and serving the broader region, NirmanNext digitizes the procurement process for top-tier brands like **Tata Steel, ACC, and Asian Paints**. Our platform addresses critical industry pain points by offering bulk pricing transparency, credit facilities, and reliable logistics.

## 🌟 Key Features

* **💰 Bulk Savings:** Intelligent pricing engine offering up to **20% savings** on bulk orders compared to standard market rates.
* **🚛 Smart Logistics:** End-to-end order tracking from warehouse to construction site.
* **💳 Credit Facilities:** Integrated financial solutions providing up to **45-day credit terms** for verified professionals.
* **🛡️ Quality Assurance:** curated marketplace featuring only authentic products from top brands (Tata, ACC, Asian Paints, etc.).
* **📊 Analytics Dashboard:** Visual insights for retailers and builders to track spending and order history (powered by Recharts).

## 🛠️ Tech Stack

This project is a **Single Page Application (SPA)** built for performance and scalability.

### Frontend Core
* **Framework:** [React 18](https://react.dev/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Routing:** [React Router DOM](https://reactrouter.com/)

### UI & UX
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Component Library:** [Shadcn/ui](https://ui.shadcn.com/) (built on Radix UI Primitives)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Animations:** `tailwindcss-animate`
* **Charts:** [Recharts](https://recharts.org/)

### State & Data
* **Server State:** [TanStack Query (React Query)](https://tanstack.com/query/latest)
* **Backend/Auth:** [Firebase](https://firebase.google.com/)
* **Forms:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) (Validation)

## 🚀 Getting Started

Follow these instructions to set up the project locally for development.

### Prerequisites
Ensure you have the following installed:
* Node.js (v18 or higher)
* npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/amiti7/nirmannext-website.git](https://github.com/amiti7/nirmannext-website.git)
    cd nirmannext-website
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Configure Environment Variables**
    Create a `.env` file in the root directory based on the template below.

4.  **Start the development server**
    ```bash
    npm run dev
    ```
    The application should now be running at `http://localhost:5173`.

## 📂 Folder Structure

The project follows a modern React structure optimized for scalability.

```text
src/
├── assets/           # Static assets (images, global styles)
├── components/       # Reusable UI components
│   ├── ui/           # Shadcn UI primitives (Button, Input, etc.)
│   └── ...           # Custom project components
├── hooks/            # Custom React hooks
├── lib/              # Utilities (utils.ts, firebase.ts, etc.)
├── pages/            # Page components (mapped to routes)
├── services/         # API calls and Firebase interactions
├── types/            # TypeScript type definitions
├── App.tsx           # Main application component
└── main.tsx          # Entry point
````

## 🔑 Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file. Since this is a Vite project, variables must start with `VITE_`.

```properties
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# API/Backend URLs (If applicable)
VITE_API_BASE_URL=[https://api.nirmannext.com](https://api.nirmannext.com)
```

## 🚢 Deployment

This project is optimized for deployment on platforms like **Vercel**, **Netlify**, or **Firebase Hosting**.

To build the project for production:

```bash
npm run build
```

This generates a `dist` folder containing the optimized static assets.

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

-----

*Built with ❤️ by the NirmanNext Engineering Team.*
