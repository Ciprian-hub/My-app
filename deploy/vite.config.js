import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://ciprian-hub.github.io/deploy/',
  plugins: [reactRefresh()]
})
