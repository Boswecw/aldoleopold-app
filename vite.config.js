import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], base: '/aldoleopold-app/', // Replace 'my-app' with your repository name

})
