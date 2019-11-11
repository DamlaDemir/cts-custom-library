
import CustomButton from "./components/CustomButton.vue";
import CustomTable from "./components/CustomTable.vue";
import CustomClock from "./components/CustomClock.vue";


export default {
    install(Vue, options) {
      Vue.component("custom-button", CustomButton);
      Vue.component("custom-table", CustomTable);
      Vue.component("custom-clock", CustomClock);
    }
  };