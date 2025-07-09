import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: "/pick-n-talk/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react": ["react", "react-dom"],
          "react-router": ["react-router"],
          "cn": ["clsx", "tailwind-merge"],
          "dexie": ["dexie", "dexie-react-hooks"],
          "i18next": ["i18next", "react-i18next", "i18next-http-backend", "i18next-browser-languagedetector"]
        }
      }
    },
    minify: process.env.NODE_ENV === "production" ? "terser" : false,
    terserOptions: {
      compress: {
        passes: 2
      },
      mangle: true,
      format: {
        comments: false
      }
    }
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
