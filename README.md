# Personal blog interface

This README provides instructions for setting up and running a personal blog interface using Vue3, Nuxt.js, and integrating UI components with Vuetify and Tailwind CSS for styling. The aim is to offer a scalable, maintainable, and visually appealing platform for personal blogging.

## How to set up a project with NUXT
Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Prerequisites
Ensure the following tools are installed on your system before proceeding:

* Node.js (version 14.x or later)
* npm (version 6.x or later) or yarn

## Setup
Start by cloning the project repository and installing the necessary dependencies.
Make sure to install the dependencies:

```bash
# Clone the project repository
git clone <repository-url>

# Change directory to your project folder
cd <project-directory>

# Install project dependencies
npm install
# or use yarn
yarn install
```

## Integrating Vuetify
Begin by installing Vuetify and its dependencies in your project:
```bash
npm i -D vuetify vite-plugin-vuetify
npm i @mdi/font
```

Next, integrate the following entries into your nuxt.config.ts file:
```typescript
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  //...
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})

```

## Utilize Vuetify Components
```vue
<template>
  <v-btn color="primary">
    Press Me
  </v-btn>
</template>

<script setup>
// No need to import Vuetify components explicitly, they are auto-imported
</script>

```

## Adding Tailwind CSS
Tailwind CSS is a utility-first CSS framework that can be used alongside Vuetify for custom styling. Here's how to add it to your project:

1) Install Tailwind CSS
Install Tailwind and its peer dependencies via npm or yarn:
```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
# or with yarn
yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest
```

2) Initialize Tailwind
Generate the tailwind.config.js and postcss.config.js files by running:

```bash
npx tailwindcss init -p
```
This command creates a Tailwind configuration file and a PostCSS configuration file in your project root, which you can customize as needed.

3) Configure Tailwind for your project
In your project's main CSS file, add the Tailwind directives to include Tailwind's styles:
```css
/* assets/css/main.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Ensure this file is imported in your Nuxt project, typically in your nuxt.config.ts file or a global component.

4) Using Tailwind with Vuetify
Note that in order to distinguish between Vuetify and Tailwind CSS, you could add the prefix 'tw-' into 'module.exports' in 'tailwind.config.js'.

```typescript
module.exports = {
  prefix: 'tw-',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
       container: {
        padding: {
          DEFAULT: "1rem",
        },
      },
    },
  },
}
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
