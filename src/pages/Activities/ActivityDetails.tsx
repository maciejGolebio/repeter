import React, { useEffect, useState } from 'react';

import {
    IonButtons, IonContent, IonHeader,
    IonMenuButton, IonPage, IonTitle,
    IonToolbar, IonFooter, IonList, IonItem, IonLabel, IonCard, IonCardTitle, IonCardContent, IonCardHeader, IonCardSubtitle, IonFab, IonFabButton, IonIcon,
} from '@ionic/react';

import { PATHS } from '../../app.config';
import { ActivityDetails } from '../../api/activities.model';
import { useParams } from 'react-router-dom';
import { getActivityDetails } from '../../api/activity.service';
import { addSharp } from 'ionicons/icons';

interface RouteParams { id: string }


const ActivityDetailsFC: React.FC = () => {
    const [activityDetails, setActivityDetails] = useState<ActivityDetails>();
    const { id } = useParams<RouteParams>();

    useEffect(() => {
        console.log('UseEffect');
        const details = getActivityDetails(id);
        setActivityDetails(details);
    });

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{activityDetails?.name || PATHS.activities.name}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                {activityDetails && activityDetails.repetitions.map((repetition) => {
                    console.info(repetition);
                    return (
                        <IonCard
                            key={repetition.id}>
                            <IonCardHeader>
                                <IonCardTitle>{repetition.date.toDateString()}</IonCardTitle>
                                <IonCardSubtitle>{repetition.description}</IonCardSubtitle>
                            </IonCardHeader>
                            <IonCardContent>
                                {Object.entries(repetition.records).map((name) => {
                                    return (
                                        <p><strong>{name[0]}</strong> {' ' + name[1] + ' '} <strong> {activityDetails.recordsType[name[0]]}</strong></p>
                                    );
                                })}
                            </IonCardContent>
                        </IonCard>
                    )
                })}
                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton routerLink={PATHS.addActivityRepetition.url} routerDirection="none">
                        <IonIcon icon={addSharp} />
                    </IonFabButton>
                </IonFab>
            </IonContent>
            <IonFooter>Repeter</IonFooter>
        </IonPage>
    );
}

export default ActivityDetailsFC;
