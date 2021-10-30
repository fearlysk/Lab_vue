import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App);
app.use(router);

app.config.errorHandler = function (err, vm, info) {
  console.log(`Catched Error: ${err.toString()}\nInfo: ${info}`);
}
app.config.warnHandler = function (msg, vm, trace) {
  console.log(`Warn: ${msg}\nTrace: ${trace}`);
}

app.mount('#app');
