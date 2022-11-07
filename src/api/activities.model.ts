export const RepetitionUnitValue = ["kg" , "s" , "m" , "km" , "kcal" , "min" , "km/h" , "kcal/h" , "series" , "repetitions"];
export type RepetitionUnitType = typeof RepetitionUnitValue[number];

export const CategoryValue = ["sport" , "gym" , "outdoor" , "indoor" , "home" , "other" , "bussiness" , "hobby" , "education" , "health" , "family" , "friends" , "relax" , "work" , "travel" , "food" , "drink" , "sleep" , "other"];
export type CategoryType = typeof CategoryValue[number];

export interface ActivityInfo {
    id: string;
    name: string;
    category: CategoryType;
    tags: CategoryType[];
    recordsType: Record<string, RepetitionUnitType>;
}

export interface ActivityDetails extends ActivityInfo {
    repetitions: Repetition[];
}

export interface Repetition{
    id: string;
    date: Date;
    description: string;
    records: Record<string, number>;
}