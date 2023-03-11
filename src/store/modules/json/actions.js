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
            try {
                const res = await axios.post(`http://localhost:3000/shoppingList`, payload);
                commit('setShoppingList', res.data)
            }catch (error){
                console.log(error)
            }
    },

    async deleteMember({commit},id){
        try{
            const res1 = await axios.get(`http://localhost:3000/messMembers`);
            const res = await axios.delete(`http://localhost:3000/messMembers/${id}`);
            res1.data = res1.data.filter((items) => items.id !== id)
            commit('setMembersAfterDelete', res1.data)
        }catch (error){
            console.log(error)
        }
    },
    async addMeal({commit},payload) {
        try {
            const res = await axios.post(`http://localhost:3000/meal`, payload);
            commit('setMeal', res.data)
            console.log(res.data)
        }catch (error){
            console.log(error)
        }
    },
    async getAllMeals ({ commit }) {
        try {
            const res = await axios.get(`http://localhost:3000/meal`);
            console.log(res.data)
            commit('setMeal',res.data)
        } catch (error) {
            console.log(error);
        }
    },

    async deleteMeals({commit},id){
        try{
            const res = await axios.delete(`http://localhost:3000/meal/${id}`);
            console.log("action id=========>",id)
            commit('setMealssAfterDelete', id)
        }catch (error){
            console.log(error)
        }
    },
    async getAllSelectedMembers ({ commit }) {
        try {
            const res = await axios.get(`http://localhost:3000/selectedMembers`);
            console.log(res.data)
            commit('setSelected',res.data)
        } catch (error) {
            console.log(error);
        }
    },

    async addSelectedMembers({commit},payload) {
        try{
            const res = await axios.post(`http://localhost:3000/selectedMembers`, {...payload});
            console.log("addmembers peyload",payload)
            commit('setSelected', res.data)
        } catch (error){
            console.log(error);
        }
    },
    async deleteSelectedMembers({commit},id){
        try{
            const res = await axios.delete(`http://localhost:3000/selectedMembers/${id}`);
            console.log("action id=========>",id)
            commit('setSelectedMembersAfterDelete', id)
        }catch (error){
            console.log(error)
        }
    },
}