import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { CarsStore } from "./CarsStore"
import { HousesStore } from "./HousesStore"

let _api = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api"
})


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cars: [],
    houses: [],
    activeCar: {},
    activeHouse: {}
  },
  modules: {
    CarsStore,
    HousesStore
  }
})
