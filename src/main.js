import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'



import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Chart from 'primevue/chart';
import MegaMenu from 'primevue/megamenu';

const app = createApp(App);
app.use(PrimeVue, {
    unstyled: true
});
app.component('Chart', Chart);
app.component('MegaMenu', MegaMenu);


app.use(createPinia())
app.use(router)

app.mount('#app')

