import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // <--- penting untuk Windows agar HMR aktif
      interval: 100,    // cek perubahan setiap 100ms
    },
    host: true, // biar bisa diakses lewat jaringan juga (opsional)
    port: 5173, // port default
  },
})
