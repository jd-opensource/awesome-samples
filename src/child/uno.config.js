import { defineConfig,presetUno,presetAttributify } from 'unocss'
import { myTheme } from './uno.theme'
import { presetTheme } from 'unocss-preset-theme'
export default defineConfig({
    // ...UnoCSS options
    presets: [
        // ...
        presetUno(),
        presetAttributify(),
        presetTheme({
            theme: myTheme,
        }),
    ],
})