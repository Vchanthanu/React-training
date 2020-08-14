import {combineReducers} from 'redux'
import firstnameR from './firstnamereducer'
import lastnameR from './lastnamereducer'
import scoreR from './scorereducer'
import addfirstreducer from './addfirstreducer'
import addlastreducer from './addlastreducer'
import addscorereducer from './addscorereducer'

const allreducer = combineReducers({
    firstname:firstnameR,
    lastname:lastnameR,
    score:scoreR,
    addfirstname:addfirstreducer,
    addlastname:addlastreducer,
    addscore:addscorereducer
})

export default allreducer