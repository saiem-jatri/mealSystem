import store from "../../index.js";

export default {
    setAllMembers: (state, payloads) => {
        state.members = payloads;
    },
    setNewMembers:(state,payload) =>{
        state.members =payload
    },
    setMembersAfterDelete:(state,payloads)=>{
        state.members = payloads
    },
    setShoppingList: (state, payload) => {
        let add = 0;
        for (let i = 0; i< payload.name.length; i++)
            {
            add += payload.name[i].price
            }
            state.count = add


    },
    setAllBlogData: (state, payloads) => {
        state.blogs = payloads
    },
    setBlogsData: (state, payloads) => {
        state.blogs.push(payloads)
    },
    AllHistory: (state, historyId) => {
        const filteredHistory = state.blogs.find(history => history.id == historyId)
        state.blogHistory = filteredHistory
    },
    setMeal:(state,payload)=>{
        // state.meal = [...state.meal, payload]
        state.meal.push(payload)

    },
    // setMealssAfterDelete:(state,payload) =>{
    //     state.meal = payload
    // }
    setMealssAfterDelete:(state,deleteId)=>{
      const deleteMeal = state.meal.filter (items => items.id = !deleteId)
       state.meal = deleteMeal
    },
    setSelected:(state,payload)=>{
        state.selectedMembers = payload
    },

    setSelectedMembersAfterDelete:(state,deleteId)=>{
        const deleteSelectedMem = state.selectedMembers.filter(items => items.id = !deleteId)
        state.selectedMembers = deleteSelectedMem
    },


    setSelectedMembersMeal:(state,payload)=>{
        state.membersMeal = payload
    }
}