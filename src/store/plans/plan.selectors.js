import { createSelector } from "reselect";

const selectPlan = state => state.plan;


export const selectPlans = createSelector(
	[selectPlan],
	(plan) => plan.plans
);

export const selectPlanToPurchase = createSelector(
	[selectPlan],
	(plan) => plan.setPurchase
);
