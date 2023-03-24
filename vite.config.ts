import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// export default defineConfig(({ command, mode }) => {
//   const env = loadEnv(mode, '.', '')
//   return {
//     // vite config
//     define: {
//       __APP_ENV__: env.APP_ENV,
//     },
//     plugins: [react()],
//   }
// })

export default defineConfig({
  plugins: [react()],
})
