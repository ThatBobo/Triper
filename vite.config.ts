import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  base: "/Triper/",
  plugins: [react()],
  publicDir: "public"
})
