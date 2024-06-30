import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'



import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Chart from 'primevue/chart';

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})
app.component('Chart', Chart);


app.use(createPinia())
app.use(router)

app.mount('#app')

