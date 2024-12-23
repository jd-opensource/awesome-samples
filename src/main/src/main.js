import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import microApp from '@micro-zoe/micro-app'

microApp.start()
createApp(App).mount('#app')

// const originalSetAttribute = document.body.setAttribute;
// document.body.setAttribute = function(name, value) {
//     originalSetAttribute.call(this, name, value);
//     const microAppBody = document.querySelector('micro-app-body');
//     if (microAppBody) {
//         microAppBody.setAttribute(name, value);
//     }
// };

// document.body.setAttribute("data-theme", "classic");


const observer = new MutationObserver((mutationsList, observer) => {
    for (let mutation of mutationsList) {
        if (mutation.type === 'attributes') {
            const microAppBody = document.querySelector('micro-app-body');
            if(!microAppBody){
                return
            }
            const changedAttribute = mutation.attributeName;
            const newValue = document.body.getAttribute(changedAttribute);
            microAppBody.setAttribute(changedAttribute, newValue);
        }
    }
});

// Start observing the body for changes
observer.observe(document.body, {
    attributes: true, // Watch all descendants of the body
});
