import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/My_Portofolio/', // <-- tambahkan baris ini
  server: {
    watch: {
      usePolling: true,
      interval: 100,
    },
    host: true,
    port: 5173,
  },
})
