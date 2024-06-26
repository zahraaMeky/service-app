<div align="center">
  <br />
      <img src="https://github.com/zahraaMeky/service-app/assets/123356306/e59f32d5-4335-40ce-adaa-6f9802a09ce9" alt="Project Banner">
  <br />
</div>
  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
  </div>

  <h3 align="center">🏠 Home Service App</h3>

   <div align="center">
       Welcome to the Home Service Application! During my journey to learn Next.js, I built this full-stack application to connect homeowners with local service providers for various home maintenance and improvement needs. Built using modern web technologies, it ensures a seamless and user-friendly experience for both homeowners and service providers.
</div>
<div>
  ✨ Features
  - **🔐 User Authentication:** Secure login and registration using Google login via Descope.
  - **🔒 Protected Routes:** Pages cannot be accessed without logging in.
  - **🔍 Service Listings:** Browse and filter for local service providers across various categories.
  - **📅 Booking System:** Easy scheduling and management of service appointments.
  - **⏳ Loading Animation:** Displayed while fetching data from the Hygraph API.
  - **📋 Booking Management:** Users can book appointments and access their booking page. Appointments that are already taken will be disabled.
</div>
<div>
  ## 🛠️ Technologies Used
- **Next.js:** A React framework for server-side rendering and generating static websites (https://nextjs.org/).
- **React.js:** A JavaScript library for building user interfaces (https://reactjs.org/).
- **Hygraph (formerly GraphCMS):** A headless CMS for managing content with a GraphQL API (https://hygraph.com/).
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development (https://tailwindcss.com/).
- **Descope:** Authentication and user management platform (https://descope.com/).
</div>
<div>
  ## 🚀 Getting Started

Follow these steps to get the application up and running on your local machine.

### 📋 Prerequisites

- Node.js
- npm or yarn

### ⚙️ Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/home-service-app.git
    ```

2. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Set up environment variables:**
    Create a `.env.local` file in the root directory and add your environment variables. Example:
    ```env
    NEXT_PUBLIC_MASTER_URL_KEY=<Your Hygraph GraphQL Endpoint>
    DESCOPE_CLIENT_ID=<Your Descope Client ID>
    DESCOPE_ACCESS_KEY=<Your Descope Access Key>
    NEXTAUTH_SECRET=<Your NextAuth Secret>
    NEXTAUTH_URL=<Your NextAuth URL>
    ```

4. **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
</div>




