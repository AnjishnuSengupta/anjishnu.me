<div align="center">
  <img src="https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Three.js-r149-000000?style=for-the-badge&logo=threedotjs&logoColor=white" alt="Three.js" />
  <img src="https://img.shields.io/badge/Tailwind-3.2-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</div>

<br />

<div align="center">
  <h1>🚀 anjishnu.me</h1>
  <p><strong>A Modern 3D Developer Portfolio</strong></p>
  <p>Built with React, Three.js, and cutting-edge web technologies</p>
  
  <br />
  
  <a href="https://www.anjishnu.me" target="_blank">
    <img src="https://img.shields.io/badge/🌐_Live_Demo-anjishnu.me-915EFF?style=for-the-badge" alt="Live Demo" />
  </a>
</div>

<br />

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🖥️ **3D Hero Section** | Interactive 3D desktop computer model with orbit controls |
| 🌍 **3D Earth Contact** | Rotating Earth model integrated with EmailJS |
| 🔮 **Floating Tech Balls** | 3D icosahedron spheres showcasing tech stack |
| ⭐ **Animated Stars** | Dynamic star field background with smooth rotation |
| 📱 **Mobile Optimized** | Adaptive rendering with fallbacks for mobile devices |
| 🎨 **Framer Motion** | Smooth, professional animations throughout |
| 📧 **Contact Form** | Functional email integration via EmailJS |
| ⚡ **Performance First** | Lazy loading, code splitting, and optimized assets |

---

## 🛠️ Tech Stack

<table>
  <tr>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=react" width="48" height="48" alt="React" />
      <br>React
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=threejs" width="48" height="48" alt="Three.js" />
      <br>Three.js
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=tailwind" width="48" height="48" alt="Tailwind" />
      <br>Tailwind
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=vite" width="48" height="48" alt="Vite" />
      <br>Vite
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=vercel" width="48" height="48" alt="Vercel" />
      <br>Vercel
    </td>
  </tr>
</table>

**Core Dependencies:**
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for R3F
- **Framer Motion** - Animation library
- **EmailJS** - Email service integration
- **Maath** - Math utilities for 3D

---

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/AnjishnuSengupta/anjishnu.me.git

# Navigate to the project
cd anjishnu.me

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── canvas/          # 3D Three.js components
│   │   ├── Ball.jsx     # Tech stack 3D balls
│   │   ├── Computers.jsx # Hero 3D computer
│   │   ├── Earth.jsx    # Contact 3D earth
│   │   └── Stars.jsx    # Background stars
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Experience.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── Tech.jsx
│   └── Works.jsx
├── constants/           # Static data
├── hoc/                 # Higher order components
├── utils/               # Utility functions
├── assets/              # Images and icons
└── App.jsx              # Main application
```

---

## 🎯 Performance Optimizations

This portfolio implements several optimizations for smooth performance:

- **📱 Mobile Detection** - Automatically switches to lighter alternatives on mobile
- **🔄 Lazy Loading** - Components load on-demand using React.lazy
- **🎮 Demand Frame Loop** - 3D scenes only render when needed
- **📦 Code Splitting** - Vite chunks for optimal loading
- **🖼️ Asset Optimization** - Compressed textures and models
- **⚡ WebGL Fallbacks** - Graceful degradation for unsupported devices

---

## 🌐 Deployment

The site is deployed on **Vercel** with automatic deployments from the `main` branch.

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <p>Made with 💜 by <a href="https://github.com/AnjishnuSengupta">Anjishnu Sengupta</a></p>
  
  <a href="https://github.com/AnjishnuSengupta" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://www.anjishnu.me" target="_blank">
    <img src="https://img.shields.io/badge/Portfolio-915EFF?style=for-the-badge&logo=About.me&logoColor=white" alt="Portfolio" />
  </a>
</div>
