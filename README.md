# Fusion Flavors - QR Menu Card

A modern, responsive QR menu card built with React, TypeScript, and Tailwind CSS. This application allows restaurants to display their menu items in a beautiful, easy-to-navigate interface that works seamlessly across all devices.

![Fusion Flavors Menu](https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80)

## Features

- 🎨 Modern, responsive design
- 📱 Mobile-friendly interface
- 🔍 Category-based menu navigation
- 🎯 Interactive UI elements
- ⚡ Fast and lightweight
- 🎭 Beautiful transitions and animations

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- npm (comes with Node.js) or [pnpm](https://pnpm.io/) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/fusion-flavors.git
cd fusion-flavors
```

2. Install dependencies:
```bash
npm install
```

## Development

To start the development server:
```bash
npm run dev
```

This will start the development server at `http://localhost:5173` (or another port if 5173 is in use).

## Building for Production

To create a production build:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
fusion-flavors/
├── src/
│   ├── App.tsx           # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles and Tailwind imports
├── public/              # Static assets
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## Technologies Used

- [React](https://reactjs.org/) - UI Framework
- [TypeScript](https://www.typescriptlang.org/) - Programming Language
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Vite](https://vitejs.dev/) - Build Tool
- [Lucide React](https://lucide.dev/) - Icons

## Customization

### Adding New Menu Items

To add new menu items, modify the `menuItems` object in `src/App.tsx`:

```typescript
const menuItems = {
  categoryName: [
    {
      id: uniqueId,
      name: 'Dish Name',
      price: xx.xx,
      description: 'Dish description'
    }
  ]
};
```

### Modifying Styles

The project uses Tailwind CSS for styling. You can customize the design by:

1. Modifying the Tailwind configuration in `tailwind.config.js`
2. Adding or modifying classes in the components
3. Extending the theme in the Tailwind configuration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request