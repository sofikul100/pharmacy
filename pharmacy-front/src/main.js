import { createApp , markRaw} from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css'
import './axios'
import router from '@/router'
import {createPinia} from "pinia"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "../node_modules/sweetalert2/dist/sweetalert2.min.css"
import Swal from 'sweetalert2'

window.Swal = Swal;


import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
const options = {
    transition: "Vue-Toastification__fade",
    maxToasts: 20,
    newestOnTop: true,
    timeout: 2000
};


const pinia = createPinia();

pinia.use(({store}) =>{
    store.router = markRaw(router);
});

const app = createApp(App)
app.use(Toast, options);
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
