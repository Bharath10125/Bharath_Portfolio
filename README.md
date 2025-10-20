# Portfolio Website - React

A modern, responsive single-page portfolio website built with React and pure CSS. Features a dark theme with smooth scrolling navigation and modular component architecture.

## 🎨 Features

- **Dark Theme**: Professional black, grey, and white color scheme
- **Responsive Design**: Mobile-first approach with Flexbox and Grid layouts
- **Smooth Navigation**: Sticky navbar with smooth scroll to sections
- **Modular Components**: Clean, maintainable component structure
- **Pure CSS**: No frameworks - custom CSS with animations
- **Google Fonts**: Poppins/Montserrat for headings, Roboto/Lato for body text

## 📂 Project Structure

```
bharath_portfolio/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── bharath_photo.jpeg   # Profile photo
│   │   └── skills/              # All skill icons/images
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky navigation bar
│   │   ├── Home.jsx         # Hero section with profile
│   │   ├── Education.jsx    # Timeline-style education section
│   │   ├── Skills.jsx       # Skills grid with icons
│   │   ├── Projects/
│   │   │   ├── Projects.jsx # Projects container
│   │   │   └── P1.jsx       # Individual project card
│   │   ├── Achievements/
│   │   │   ├── Achievements.jsx # Achievements container
│   │   │   └── A1.jsx       # Individual achievement card
│   │   ├── Certificates.jsx # Certificate grid
│   │   ├── Contact.jsx      # Contact links section
│   │   └── Footer.jsx       # Footer with links
│   ├── styles/
│   │   ├── global.css       # Global styles and variables
│   │   ├── Navbar.css
│   │   ├── Home.css
│   │   ├── Education.css
│   │   ├── Skills.css
│   │   ├── Projects.css
│   │   ├── Achievements.css
│   │   ├── Certificates.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   ├── App.js               # Main app component
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your assets:**
   - Profile photo is already set: `bharath_photo.jpeg`
   - Skill icons are in `src/assets/skills/` folder
   - Add project images: `project1.jpg` to `project8.jpg` in `src/assets/`
   - Add certificate images: `cert1.jpg` to `cert15.jpg` in `src/assets/`
   - Projects: `project1.jpg` to `project8.jpg`
   - Certificates: `cert1.jpg` to `cert15.jpg`

3. **Start development server:**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## ✏️ Customization Guide

### Update Personal Information

**Home Section** (`src/components/Home.jsx`):
```jsx
<h1 className="home-name">Your Name</h1>
<h2 className="home-title">Your Role/Title</h2>
<p className="home-bio">Your bio text...</p>
```

**Education Section** (`src/components/Education.jsx`):
- Update degree, college, department, years, and mentor information

**Contact Section** (`src/components/Contact.jsx`):
- Update email (mailto: link)
- Update GitHub, LinkedIn, Twitter URLs

**Footer** (`src/components/Footer.jsx`):
- Update copyright name
- Update social media links

### Update Projects

Edit `src/components/Projects/Projects.jsx`:
```jsx
const projectsData = [
  {
    id: 1,
    title: 'Your Project Title',
    thumbnail: '/assets/project1.jpg',
    description: 'Project description...',
    techStack: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/username/repo',
    demo: 'https://demo-link.com'
  },
  // Add more projects...
];
```

### Update Skills

Edit `src/components/Skills.jsx`:
```jsx
const coreSkills = [
  { name: 'Skill Name', icon: '🔧' },
  // Add more skills...
];
```

### Update Achievements

Edit `src/components/Achievements/Achievements.jsx`:
```jsx
const achievementsData = [
  {
    id: 1,
    icon: '🏆',
    title: 'Achievement Title',
    description: 'Description...',
    date: 'Month Year'
  },
  // Add more achievements...
];
```

### Update Certificates

Edit `src/components/Certificates.jsx`:
```jsx
const certificatesData = [
  {
    id: 1,
    title: 'Certificate Name',
    organization: 'Issuing Organization',
    image: '/assets/cert1.jpg',
    link: 'https://certificate-link.com'
  },
  // Add more certificates...
];
```

## 🎨 Styling Customization

### Colors

Edit `src/styles/global.css` to change the color scheme:
```css
body {
  background-color: #0a0a0a;  /* Main background */
  color: #e0e0e0;             /* Text color */
}
```

### Fonts

Fonts are loaded from Google Fonts in `public/index.html`. Current fonts:
- **Headings**: Poppins, Montserrat
- **Body**: Roboto, Lato

### Animations

Fade-in animations are defined in `src/styles/global.css`:
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## 📦 Build for Production

```bash
npm run build
```

Builds the app for production to the `build` folder.

## 📱 Sections Overview

1. **Home**: Profile photo, name, title, and bio
2. **Education**: Timeline with degrees and institutions
3. **Skills**: Grid of core and secondary skills with icons
4. **Projects**: 8 project cards with images, descriptions, tech stacks, and links
5. **Achievements**: 5 achievement cards with icons and descriptions
6. **Certificates**: 15+ certificate cards with images and links
7. **Contact**: Email and social media links
8. **Footer**: Copyright and quick navigation links

## 🔧 Technologies Used

- **React** (18.x)
- **Pure CSS** (No frameworks)
- **Google Fonts** (Poppins, Montserrat, Roboto, Lato)
- **HTML5 Smooth Scroll**

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

**© 2025 Your Name. All rights reserved.**

**© 2025 Your Name. All rights reserved.**

---

## 🎯 Quick Start Checklist

- [ ] Run `npm install`
- [ ] Run `npm start` to view the site
- [ ] Add your profile photo to `public/assets/profile.jpg`
- [ ] Update your name and bio in `src/components/Home.jsx`
- [ ] Update education info in `src/components/Education.jsx`
- [ ] Update skills in `src/components/Skills.jsx`
- [ ] Update projects data in `src/components/Projects/Projects.jsx`
- [ ] Add project images to `public/assets/`
- [ ] Update achievements in `src/components/Achievements/Achievements.jsx`
- [ ] Update certificates in `src/components/Certificates.jsx`
- [ ] Add certificate images to `public/assets/`
- [ ] Update contact links in `src/components/Contact.jsx`
- [ ] Update footer in `src/components/Footer.jsx`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
