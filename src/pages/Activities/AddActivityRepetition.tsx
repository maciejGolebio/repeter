import React, { useEffect, useState } from 'react';
import { getActivities } from '../../api/activity.service';

import {
  IonButtons, IonContent, IonHeader, IonMenuButton, IonPage,
  IonTitle, IonToolbar,IonFooter,
} from '@ionic/react';

import { PATHS } from '../../app.config';
import { ActivityDetails } from '../../api/activities.model';

const AddActivityRepetition: React.FC<Pick<ActivityDetails, 'recordsType'>> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{PATHS.addActivityRepetition.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

      </IonContent>
      <IonFooter>Repeter</IonFooter>
    </IonPage>
  );
}

export default AddActivityRepetition;
