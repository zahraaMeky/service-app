<div align="center">
  <br />
      <img src="https://github.com/zahraaMeky/service-app/assets/123356306/e59f32d5-4335-40ce-adaa-6f9802a09ce9" alt="Banner">
  <br />
</div>  <br />  
  <div align="center">
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
      <img src="https://img.shields.io/badge/-Descope-black?style=for-the-badge&logoColor=white&logo=descope&color=00C853" alt="descope" />

  </div>

  <h3 align="center">🏠 Home Service App</h3><br/>

   <div align="left">
       Welcome to the Home Service Application! During my journey to learn Next.js, I built this full-stack application to connect homeowners with local service providers for various home maintenance and improvement needs. Built using modern web technologies, it ensures a seamless and user-friendly experience for both homeowners and service providers.
</div><br/><br/>
<div>
  ✨ Features<br/>
  - **🔐 User Authentication:** Secure login and registration using Google login via Descope.<br/>
  - **🔒 Protected Routes:** Pages cannot be accessed without logging in.><br/>
  - **🔍 Service Listings:** Browse and filter for local service providers across various categories.<br/>
  - **📅 Booking System:** Easy scheduling and management of service appointments.<br/>
  - **⏳ Loading Animation:** Displayed while fetching data from the Hygraph API.<br/>
  - **📋 Booking Management:** Users can book appointments and access their booking page. Appointments that are already taken will be disabled.
</div><br/><br/>
<div>
  ## 🛠️ Technologies Used<br/>
- **Next.js:** A React framework for server-side rendering and generating static websites (https://nextjs.org/).<br/>
- **React.js:** A JavaScript library for building user interfaces (https://reactjs.org/).<br/>
- **Hygraph (GraphCMS):** a flexible localization API that you can use to publish content (https://hygraph.com/).<br/>
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development (https://tailwindcss.com/).<br/>
- **Descope:** Authentication and user management platform (https://descope.com/).
</div><br/><br/>
<div>
  ## 🚀 Getting Started<br/><br/>

Follow these steps to get the application up and running on your local machine.<br/>

### 📋 Prerequisites<br/>

- Node.js>
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
</div><br/><br/>
<div>
  ## 🗂️ Project Structure <br/>

- `app/`: Main application pages and layouts.<br/>
- `api/`: Backend API routes for Hygraph.<br/>
- `api/auth/`: Authentication-related API routes for Descope.<br/>
- `components/`: Reusable React components.<br/>
- `constants/`: Application-wide constants.<br/>
- `globals.css/`: Global styles and Tailwind CSS configuration.<br/>
- `lib/`: Utility functions.<br/>
- `public/`: Static files and assets.<br/>

## 🔒 Protected Routes<br/><br/>

The application uses Descope for authentication. Certain routes are protected and require users to be logged in. If a user is not authenticated, they will be redirected to the login page.<br/><br/>

## 🔄 Fetching Data<br/>

Data is fetched from the Hygraph API. While data is being fetched, a loading animation is displayed to enhance user experience.<br/><br/>

## 📅 Booking System<br/>

Users can book appointments with service providers. The booking system ensures that slots that are already taken are disabled to prevent double bookings. Users can also view and manage their bookings on their booking page.

</div><br/><br/>
<div>
  ## 📧 Contact<br/>

For any inquiries, please reach out to [eng.alzahraa.meky@gmail.com](mailto:eng.alzahraa.meky@gmail.com).<br/>
or WhatsApp at +96899495057.

---

Visit the live application at [nextjsservice-app.netlify.app](https://nextjsservice-app.netlify.app/)
</div>



