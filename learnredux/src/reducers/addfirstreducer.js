// import Addfirstname from '../action/addfirstname'

const addfirstreducer =function Addfirstname(state=null,action){
    console.log(action)
    switch(action.type){
        case 'ADD_FIRST':
            return action.payload
        default:
            break;    
    }
    return state
}

export default addfirstreducer