
import CustomButton from "./components/CustomButton.vue";
import CustomTable from "./components/CustomTable.vue";

export default {
    install(Vue, options) {
      Vue.component("custom-button", CustomButton);
      Vue.component("custom-table", CustomTable);
    }
  };