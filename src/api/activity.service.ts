import { ACTIVITIES, ACTIVITY_DETAILS } from "./activity.data"

export const getActivities = () => {
    return ACTIVITIES;  
}

export const getActivityDetails = (id: string) => {
    console.info(ACTIVITY_DETAILS[id])
    return ACTIVITY_DETAILS[id];
}