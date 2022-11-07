export const PATHS = {
    activities: {
        url: '/page/Activities',
        name: 'Activities',
    },
    activityDetails: {
        url: '/page/Activities/:id',
        name: 'Activity',
        specificUrl: (id: string) => `/page/Activities/${id}`,
    },
    addActivity: {
        url: '/page/AddActivity',
        name: 'Add Activity'
    },
    addActivityRepetition: {
        url: '/page/Activities/:id/AddRepetition',
        name: 'Add Repetition',
        specificUrl: (id: string) => `/page/Activities/${id}/AddRepetition`,
    },
    settings: {
        url: '/page/Settings',
        name: 'Settings'
    }
}