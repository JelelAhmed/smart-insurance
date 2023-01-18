import planActionTypes from "./plan.types";

export const setPlansData = (data) => ({
	type: planActionTypes.SET_PLAN_DATA,
	payload: data
});

export const setPlanToPurchase = (data) => ({
	type: planActionTypes.SET_PURCHASE_PLAN,
	payload: data
});

export const setUserPlans = (data) => ({
	type: planActionTypes.SET_USER_PLANS,
	payload: data
});

