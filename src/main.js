// Style
import './assets/main.css'
import router from "@/router/index.js";

// Font Awesome
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far, fab)
dom.watch();

// Vue
import { createApp } from 'vue'
import App from './App.vue'


// const app = createApp(App)
// app.use(router)
// app.mount('#app')

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(router)
    .mount('#app')
