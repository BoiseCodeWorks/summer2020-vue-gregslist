import _api from "./AxiosService"
import router from "../router"



export const CarsStore = {
    mutations: {
        setAllCars(state, cars) {
            state.cars = cars
        },
        setActiveCar(state, car) {
            state.activeCar = car
        },
        addToCars(state, car) {
            state.cars.push(car)
        }
    },
    actions: {
        async getAllCars({ commit }) {
            try {
                let res = await _api.get('cars')
                commit("setAllCars", res.data.data)
            } catch (error) {
                console.error(error)
            }
        },
        async getCarDetails({ commit }, id) {
            try {
                let res = await _api.get('cars/' + id)
                commit("setActiveCar", res.data.data)
            } catch (error) {
                console.error(error)
            }
        },
        async createCar({ commit, dispatch }, carDeetz) {
            try {
                let res = await _api.post('cars', carDeetz)
                commit("addToCars", res.data.data)
                router.push({ name: "CarDetails", params: { id: res.data.data._id } })
            } catch (error) {
                console.error(error)
            }
        },
        async deleteCar({ commit, dispatch }, id) {
            try {
                let res = await _api.delete('cars/' + id)
                // NOTE Router Push is NOT an array method but a navigation method
                router.push({ name: "Home" })
            } catch (error) {
                console.error(error)
            }
        }
    }
}