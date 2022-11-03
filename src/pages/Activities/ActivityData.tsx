import React, { useEffect, useState } from 'react';
import { getActivities } from '../../api/activity.service';

import {
    IonButtons, IonContent, IonHeader,
    IonMenuButton, IonPage, IonTitle,
    IonToolbar, IonFooter,
} from '@ionic/react';


import { PATHS } from '../../app.config';
import { ActivityDetails } from '../../api/activities.model';

const ActivityData: React.FC = () => {
    const [activityDetails, setActivityDetails] = useState<ActivityDetails>();

    useEffect(() => { }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{PATHS.activities.name}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                
            </IonContent>
            <IonFooter>Repeter</IonFooter>
        </IonPage>
    );
}

export default ActivityData;
