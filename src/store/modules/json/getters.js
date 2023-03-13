export default{
    allIMembers:(state)=> {
        return state.members;
    },

    allCount:(state)=>{
        return state.count
    },

    allICardtems:(state)=> {
        return state.cardItems;
    },
    allBlogItems:((state)=>{
        return state.blogs
    }),
    getFilteredHistory:((state)=>{
        return state.blogHistory
    }),
    getAllMeal:((state)=>{
        return state.meal
    }),
    getAllSelectedMembers:((state)=>{
        return state.selectedMembers
    }),
    getAllSelectedMembersMeal:((state)=>{
        return state.membersMeal
    }),

    getFilteredMealData:(state)=>(id)=>{
        return state.membersMeal.filter(meals => meals.id === id)
    }


    // getAllSelectedMembersMeal: (state) => () => {
    //     // console.log("getters passing id",id)
    //     // return state.membersMeal.filter(meals => meals.mealId === id)
    //     return state.membersMeal
    //
    // }
}