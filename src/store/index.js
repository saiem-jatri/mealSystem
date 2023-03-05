import { createStore } from "vuex";
import jsonModules from './modules/json/index.js';

const store=createStore({
    modules:{
        json:jsonModules
    },
})

export default store;