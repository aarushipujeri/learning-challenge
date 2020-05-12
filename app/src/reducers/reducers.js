import C from '../constants'
import { combineReducers } from 'redux'
import { LOGIN } from "../actions/auth";

export const user = (state=10, action) => 
	(action.type === C.ADD_USER) ? 
		 parseInt(action.payload) :
		 state