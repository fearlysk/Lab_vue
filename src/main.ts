import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../public/styles.scss'

const app = createApp(App);
app.use(router);

app.config.errorHandler = function (err, vm, info) {
  console.log(`Catched Error: ${(err as any).toString()}\nInfo: ${info}`);
}
app.config.warnHandler = function (msg, vm, trace) {
  console.log(`Warn: ${msg}\nTrace: ${trace}`);
}

app.mount('#app');
