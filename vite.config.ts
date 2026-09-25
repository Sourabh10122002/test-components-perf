import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { inventiveUiVite, IUI_ASSET_OPTIMIZE_DEPS_EXCLUDE } from "@inventive-ui/framework/vite";
// https://vite.dev/config/
export default defineConfig({
    plugins: [...inventiveUiVite({ root: import.meta.dirname }), react()],
    resolve: { dedupe: ["@inventive-ui/framework", "react", "react-dom"] },
    optimizeDeps: { exclude: [...IUI_ASSET_OPTIMIZE_DEPS_EXCLUDE] }
});

