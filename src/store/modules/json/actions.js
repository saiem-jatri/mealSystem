import axios from "axios";

export default {
    async getAllMembers ({ commit }) {
        try {
            const res = await axios.get(`http://localhost:3000/messMembers`);

            commit('setAllMembers',res.data)
        } catch (error) {
            console.log(error);
        }
    },

    async addMembers({commit},payload) {
        try{
            const res = await axios.post(`http://localhost:3000/messMembers`, {...payload});
            commit('setNewMembers', res.data)
        } catch (error){
            console.log(error);
        }
    },



    async addShoppingData({commit},payload) {
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
        }catch (error){
            console.log(error)
        }
    },
    async getAllMeals ({ commit }) {
        try {
            const res = await axios.get(`http://localhost:3000/meal`);
            commit('setMeal',res.data)
        } catch (error) {
            console.log(error);
        }
    },

    async deleteMeals({commit},id){
        try{
            const res = await axios.delete(`http://localhost:3000/meal/${id}`);
            commit('setMealssAfterDelete', id)
        }catch (error){
            console.log(error)
        }
    },
    async getAllSelectedMembers ({ commit }) {
        try {
            const res = await axios.get(`http://localhost:3000/selectedMembers`);
            commit('setSelected',res.data)
        } catch (error) {
            console.log(error);
        }
    },

    async addSelectedMembers({commit},payload) {
        try{
            const res = await axios.post(`http://localhost:3000/selectedMembers`, {...payload});
            commit('setSelected', res.data)
        } catch (error){
            console.log(error);
        }
    },
    async deleteSelectedMembers({commit},id){
        try{
            const res = await axios.delete(`http://localhost:3000/selectedMembers/${id}`);
            commit('setSelectedMembersAfterDelete', id)
        }catch (error){
            console.log(error)
        }
    },

    async addSelectedMembersMeal({commit},payload) {
        try{
            const res = await axios.post(`http://localhost:3000/selectedMembersMeal`, {...payload});
            console.log("setSelectedMembersMeal peyload",payload)
            commit('setSelectedMembersMeal', res.data)
        } catch (error){
            console.log(error);
        }
    },
    async getAllSelectedMembersMeal ({ commit }) {
        try {
            const res = await axios.get(`http://localhost:3000/selectedMembersMeal`);
            commit('setSelectedMembersMeal',res.data)
        } catch (error) {
            console.log(error);
        }
    },


}