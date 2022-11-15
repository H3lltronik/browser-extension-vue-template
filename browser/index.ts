import { createApp } from 'vue';
import App from './components/App.vue'

const h3El = document.createElement("div");
h3El.setAttribute("id", "h3-browser-app");
document.body.appendChild(h3El);

const app = createApp(App);
// app.use(router);
app.mount('#h3-browser-app');
