import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  base: "/Triper/",
  plugins: [react()],
  publicDir: "public",

  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "TriperStripe",
      fileName: () => "triper.js",
      formats: ["es", "umd"]
    },
    rollupOptions: {
      external: ["react", "react-dom", "react-router-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-router-dom": "ReactRouterDOM"
        }
      }
    }
  }
})
