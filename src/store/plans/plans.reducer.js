import planActionTypes from "./plan.types";

const INITIAL_STATE = {
	plans: [],
	setPurchase: [],
	userPlans: [],
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
		
		case planActionTypes.SET_USER_PLANS: 
		return {
			...state,
			userPlans: action.payload
		}
			
			
			
		default:
			return state;
	}
};

export default planReducers;