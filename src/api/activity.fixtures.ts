import { ActivityDetails, ActivityInfo } from "./activities.model";

export const ACTIVITIES: ActivityInfo[] = [
    {
        "id" :"1",
        "name": "Running",
        "category": "sport",
        "tags" : ["sport", "outdoor"],
        "recordsType": {
            "distance": "km",
            "time": "min"
        }
    },
    {
        "id" :"2",
        "name": "Wyciskanie",
        "category": "gym",
        "tags" : ["sport", "gym"],
        "recordsType": {
            "series": "series",
            "reps": "repetitions",
            "weight": "kg"
        }
    } 
];


export const ACTIVITY_DETAILS: Record<string, ActivityDetails> = {
    "1": {
        "id" :"1",
        "name": "Running",
        "category": "sport",
        "tags" : ["sport", "outdoor"],
        "recordsType": {
            "distance": "km",
            "time": "min"
        },
        repetitions: []
    },
    "2": {
        "id" :"2",
        "name": "Wyciskanie",
        "category": "gym",
        "tags" : ["sport", "gym"],
        "recordsType": {
            "series": "series",
            "reps": "repetitions",
            "weight": "kg"
        },
        repetitions: []
    } 
}