import { ActivityDetails, ActivityInfo, Repetition } from "./activities.model";

export const ACTIVITIES: ActivityInfo[] = [
    {
        "id": "1",
        "name": "Running",
        "category": "sport",
        "tags": ["sport", "outdoor"],
        "recordsType": {
            "distance": "km",
            "time": "min"
        }
    },
    {
        "id": "2",
        "name": "Wyciskanie",
        "category": "gym",
        "tags": ["sport", "gym"],
        "recordsType": {
            "series": "series",
            "reps": "repetitions",
            "weight": "kg"
        }
    }
];

const runningRepetitions: Repetition[] = [
    {
        id: "1",
        date: new Date('2022-11-10T03:24:00'),
        records: {
            distance: 5,
            time: 40,
        },
        description: "First run"

    },
    {
        id: "2",
        date: new Date('2022-11-14T03:24:00'),
        records: {
            distance: 4.8,
            time: 40,
        },
        description: "Second run"
    },
    {
        id: "3",
        date: new Date('2022-11-17T03:24:00'),
        records: {
            distance: 4.8,
            time: 40,
        },
        description: "Third run"
    },
    {
        id: "4",
        date: new Date('2022-11-18T03:24:00'),
        records: {
            distance: 1,
            time: 4.20,
        },
        description: "1 KM test"
    },
    {
        id: "5",
        date: new Date('2022-11-24T03:24:00'),
        records: {
            distance: 5,
            time: 35,
        },
        description: "5 KM test"
    },

]

export const ACTIVITY_DETAILS: Record<string, ActivityDetails> = {
    "1": {
        "id": "1",
        "name": "Running",
        "category": "sport",
        "tags": ["sport", "outdoor"],
        "recordsType": {
            "distance": "km",
            "time": "min"
        },
        repetitions: runningRepetitions
    },
    "2": {
        "id": "2",
        "name": "Wyciskanie",
        "category": "gym",
        "tags": ["sport", "gym"],
        "recordsType": {
            "series": "series",
            "reps": "repetitions",
            "weight": "kg"
        },
        repetitions: []
    }
}