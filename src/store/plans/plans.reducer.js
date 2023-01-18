import planActionTypes from "./plan.types";

const INITIAL_STATE = {
	plans: [],
	setPurchase: []
}

const planReducers = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case planActionTypes.SET_PLAN_DATA: 
			return {
				...state,
				plans: action.payload
			}
	
		case planActionTypes.SET_PURCHASE_PLAN: 
			return {
				...state,
				setPurchase: action.payload
			}
			
			
		default:
			return state;
	}
};

export default planReducers;