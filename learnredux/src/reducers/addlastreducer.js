const addlastreducer = function(state=null,action){
    switch(action.type){
        case 'ADD_LAST':
            return action.payload
        default:
            break;    
    }
    return state
}
export default addlastreducer