export default {
    state:{
        isCollapse:false
    },
    mutations:{
        collapseMenu(state){
            console.log(state)
            state.isCollapse = !state.isCollapse
        }
    }
}