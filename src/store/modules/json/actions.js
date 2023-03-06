import axios from "axios";

export default {
    async getAllMembers ({ commit }) {
        try {
            const res = await axios.get(`http://localhost:3000/messMembers`);
            console.log(res.data)
            commit('setAllMembers',res.data)
        } catch (error) {
            console.log(error);
        }
    },

    async addMembers({commit},payload) {
        try{
            const res = await axios.post(`http://localhost:3000/messMembers`, {...payload});
            console.log("addmembers peyload",payload)
            commit('setNewMembers', res.data)
        } catch (error){
            console.log(error);
        }
    },



    async addShoppingData({commit},payload) {
        console.log("action payload",payload)

            const res = await axios.post(`http://localhost:3000/shoppingList`, payload);
            commit('setShoppingList', res.data)

        console.log(res)

    },

    async deleteMember({commit},id){
        try{
            const res1 = await axios.get(`http://localhost:3000/messMembers`);
            const res = await axios.delete(`http://localhost:3000/messMembers/${id}`);
            console.log("action id=========>",id)
            console.log("action data",res1.data)
            res1.data = res1.data.filter((items) => items.id !== id)
            commit('setMembersAfterDelete', res1.data)
        }catch (error){
            console.log(error)
        }
    }
}