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
    })
}