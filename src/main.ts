import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";

// import "~/styles/element/index.scss";

// import ElementPlus from "element-plus";
// import all element css, uncommented next line
// import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`

import "~/styles/index.scss";
import 'uno.css'

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
// app.use(ElementPlus);
app.mount("#app");
