

import  {defineConfig} from "vite";
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
    plugins:[Vue(
        {
            template: {
                compilerOptions: { isCustomElement: tag => tag.startsWith('micro-app') },
            },
        }
    ), VueJsx()],
    server:{
        cors:true,
        port:8001
    }
})
