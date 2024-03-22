import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/employee-directory-client/",
  server: {
    host: "127.0.0.1",
    port: 3000,
  }
})
