
import router from "../router"
import _api from "./AxiosService"

export const HousesStore = {
    mutations: {
        setAllHouses(state, houses) {
            state.houses = houses
        },
        setActiveHouse(state, house) {
            state.activeHouse = house
        },
        addToHouses(state, house) {
            state.houses.push(house)
        }
    },
    actions: {
        async getAllHouses({ commit }) {
            try {
                let res = await _api.get('houses')
                commit("setAllHouses", res.data.data)
            } catch (error) {
                console.error(error)
            }
        },
        async getHouseDetails({ commit }, id) {
            try {
                let res = await _api.get('houses/' + id)
                commit("setActiveHouse", res.data.data)
            } catch (error) {
                console.error(error)
            }
        },
        async createHouse({ commit }, houseDeetz) {
            try {
                let res = await _api.post('houses', houseDeetz)
                commit("addToHouses", res.data.data)
                router.push({ name: "HouseDetails", params: { id: res.data.data._id } })
            } catch (error) {
                console.error(error)
            }
        },
        async deleteHouse(_, id) {
            try {
                await _api.delete('houses/' + id)
                router.push({ name: "Home" })
            } catch (error) {
                console.error(error)
            }
        }
    }
}