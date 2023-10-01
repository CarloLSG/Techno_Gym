import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ToastService from "primevue/toastservice";
import PrimeVue from "primevue/config";

//PrimeVue Material Design Theme
import "primevue/resources/themes/md-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
//PrimeVue Components
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Row from "primevue/row";
import InputText from "primevue/inputtext";
import Card from "primevue/card";

const app = createApp(App)

app.use(router)
app.use(PrimeVue, { ripple: true });
app.use(ToastService)
app.component("pv-data-table", DataTable)
app.component("pv-column", Column);
app.component("pv-toolbar", Toolbar);
app.component("pv-button", Button);
app.component("pv-row", Row);
app.component("pv-input-text", InputText);
app.component("pv-card", Card);

app.mount('#app')
