
import { createApp } from 'vue'
import App from './App.vue'
import microApp from "@micro-zoe/micro-app";


createApp(App).mount('#app')

microApp.start({
    excludeAssetFilter (assetUrl) {
        if (assetUrl === 'createVerticesFromHeightmap' || assetUrl === 'transferTypedArrayTest' || assetUrl === 'createVerticesFromQuantizedTerrainMesh') {
          return true // 返回true则micro-app不会劫持处理当前文件
        }
        return false
    },
    plugins: {  
        modules: {
            'cesium-map': [{
                loader(code, url) {
                    // TODO 根据 实际情况再调整限制
                    if(url.indexOf("assets/mars3d-cesium/Cesium.js") > 0 && code.indexOf('var Cesium=')> -1) {
                        code = code.replace('var Cesium=', 'window.Cesium=')
                    }
                    return code
                }
            }]
        }
    }
})


