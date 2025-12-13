import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const DEV = true;

// https://vite.dev/config/
export default defineConfig({
  base: DEV ? undefined : '/subtodo/',
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
})
