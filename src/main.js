import {createApp} from 'vue';
import App from './App.vue';

import router from "@/router/router";
import "@/assets/index.scss";
import components from '@/components/UI';
import store from "@/store";

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component);
})

app
    .use(router)
    .use(store)
    .mount('#app');