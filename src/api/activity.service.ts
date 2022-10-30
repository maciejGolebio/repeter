import { ACTIVITIES, ACTIVITY_DETAILS } from "./activity.fixtures"

export const getActivities = () => {
    return ACTIVITIES;  
}

export const getActivityDetails = (id: string) => {
    return ACTIVITY_DETAILS[id];
}