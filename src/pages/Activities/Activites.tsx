import React, { useEffect, useState } from 'react';
import { getActivities } from '../../api/activity.service';

import {
  IonButtons, IonContent, IonHeader, IonMenuButton, IonPage,
  IonTitle, IonToolbar, IonFab, IonFabButton, IonFooter, IonIcon, IonCardHeader, IonCard, IonCardTitle, IonCardSubtitle, IonCardContent,
} from '@ionic/react';

import { addSharp } from 'ionicons/icons';
import { PATHS } from '../../app.config';
import { ActivityInfo } from '../../api/activities.model';

const recordTypeToString = (records: Record< string, string>) => {
  return Object.keys(records).map((key) => `${key} [${records[key]}] `).join(' | ');
};

const Activities: React.FC = () =>{
  const [activities, setActivities] = useState<ActivityInfo[]>([]);

  useEffect(() => {
    const activities = getActivities();
    setActivities(activities);
  }, []);

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
        {activities.map((activity) =>
          <IonCard color="primary">
            <IonCardHeader>
              <IonCardTitle>{activity.name}</IonCardTitle>
              <IonCardSubtitle>{activity.tags.join(' | ')}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              {recordTypeToString(activity.recordsType)}
            </IonCardContent>
          </IonCard>)}

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton routerLink={PATHS.addActivity.url} routerDirection="none">
            <IonIcon icon={addSharp} />
          </IonFabButton>
        </IonFab>
      </IonContent>
      <IonFooter>Repeter</IonFooter>
    </IonPage>
  );
}

export default Activities;
