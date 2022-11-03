import React, { useRef } from 'react';

import {
  IonButtons, IonContent,
  IonHeader, IonMenuButton, IonPage,
  IonTitle, IonToolbar, IonFooter, IonButton,
  IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonList, useIonAlert, IonModal,
} from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';

import { useForm } from 'react-hook-form';
import { PATHS } from '../../app.config';
import { CategoryType, CategoryValue, RepetitionUnitValue } from '../../api/activities.model';
import './Activites.css';
interface Form {
  title: string;
  category: CategoryType;
  tags: CategoryType[];
  recordsType: Record<string, { name: string, unit: string }>;
}

const AddActivity: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);

  function confirm() {
    if (newRecordsTypeName && newRecordsTypeUnit) {
      modal.current?.dismiss(input.current?.value, 'confirm');
      addRecordType(newRecordsTypeName, newRecordsTypeUnit);
    } else {
      alert(JSON.stringify({ newRecordsTypeName, newRecordsTypeUnit }, null, 2));
    }
  }

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    console.log('onWillDismiss', ev);
    // reset new records type
    setNewRecordsTypeName('Time');
    setNewRecordsTypeUnit('min');
  }

  const defaultForm = {
    title: 'New Activity',
    category: CategoryValue[0],
    tags: [CategoryValue[0]],
    recordsType: {},
  }
  const {
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const [newRecordsTypeUnit, setNewRecordsTypeUnit] = React.useState<string>('min');
  const [newRecordsTypeName, setNewRecordsTypeName] = React.useState<string>('Time');
  const [formStates, setFormStates] = React.useState<Form>(defaultForm);


  const onTitleChange = (e: any) => {
    setFormStates({ ...formStates, title: e.target.value });
  };

  const onCategoryChange = (e: any) => {
    setFormStates({ ...formStates, category: e.detail.value });
  }

  const onTagsChange = (_event: any) => {
    setFormStates(formStates => ({ ...formStates, tags: _event.detail.value }));
  };

  const onRecordsTypeNameChange = (e: any) => {
    setNewRecordsTypeName(e.target.value);
  }

  const addRecordType = (name: string, unit: string) => {
    const newRecordType = { name, unit };
    const newRecordsType = { ...formStates.recordsType, [Object.keys(formStates.recordsType).length]: newRecordType };
    setFormStates(formStates => ({ ...formStates, recordsType: newRecordsType }));
  };

  const removeRecordsType = (index: string) => {
    const newRecordsType = { ...formStates.recordsType };
    delete newRecordsType[index];
    setFormStates(formStates => ({ ...formStates, recordsType: newRecordsType }));
  };

  const onSubmit = () => {
    console.log('onSubmit');
    alert(JSON.stringify(formStates, null, 2));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{PATHS.addActivity.name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <form onSubmit={handleSubmit(onSubmit)}>
          <IonItem>
            <IonLabel>Title</IonLabel>
            <IonInput value={formStates.title} onIonInput={onTitleChange} />
          </IonItem>
          <IonItem>
            <IonLabel>Tags</IonLabel>
            <IonSelect
              value={formStates.tags}
              multiple
              cancelText="Cancel"
              okText="Ok"
              onIonChange={(_e) => onTagsChange(_e)}
            >
              {CategoryValue.map(category => <IonSelectOption value={category}>{category}</IonSelectOption>)}
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>Main Category</IonLabel>
            <IonSelect
              value={formStates.category}
              cancelText="Cancel"
              okText="Ok"
              multiple={false}
              onIonChange={(_e) => onCategoryChange(_e)}>
              {CategoryValue.map(category => <IonSelectOption value={category}>{category}</IonSelectOption>)}
            </IonSelect>
          </IonItem>
          <IonItem class="align-items-start">
            <IonLabel text-wrap>Activity Dimensions <p>{Object.values(formStates.recordsType).map((v, i, { length }) => {
              return `${v.name} (${v.unit})${i < length - 1 ? ' x ' : ''}`;
            })}</p></IonLabel>
            <IonList inset={false} class="ion-no-padding">
              {Object.entries(formStates.recordsType).map(([key, value]) => (
                <><p>{`${value.name} [${value.unit}]`}</p> <IonButton expand="block" onClick={() => { removeRecordsType(key) }}>Remove</IonButton></>
              ))}
              <IonButton class="ion-contr-padding" id="open-modal" expand="block">Add</IonButton>
            </IonList>
            <IonModal ref={modal} trigger="open-modal" onWillDismiss={(ev) => onWillDismiss(ev)}>
              <IonHeader>
                <IonToolbar>
                  <IonButtons slot="start">
                    <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
                  </IonButtons>
                  <IonTitle>Add Dimension</IonTitle>
                  <IonButtons slot="end">
                    <IonButton strong={true} onClick={() => confirm()}>
                      Confirm
                    </IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonHeader>
              <IonContent className="ion-padding">
                <IonItem>
                  <IonLabel position="stacked">Name</IonLabel>
                  <IonInput ref={input}
                    type="text"
                    placeholder="Dimension Name e.g. Time, Distance, Weight"
                    onIonInput={(_e) => { onRecordsTypeNameChange(_e) }} />
                </IonItem>
                <IonItem>
                  <IonLabel position="stacked">Unit</IonLabel>
                  <IonSelect
                    placeholder={RepetitionUnitValue[0]}
                    cancelText="Cancel"
                    okText="Ok"
                    multiple={false}
                    onIonChange={(_e) => setNewRecordsTypeUnit(_e.detail.value)}
                  >
                    {RepetitionUnitValue.map(unit => <IonSelectOption value={unit}>{unit}</IonSelectOption>)}
                  </IonSelect>
                </IonItem>
              </IonContent>
            </IonModal>
          </IonItem>
          <IonToolbar>
              <IonButton class='form-buttons-margin' slot='end'  type="submit" routerLink={PATHS.activities.url} routerDirection="none" fill="clear" >submit</IonButton>
              <IonButton class='form-buttons-margin' slot='start' type="reset" routerLink={PATHS.activities.url} routerDirection="none" fill="clear">cancel</IonButton>
          </IonToolbar>
        </form>
      </IonContent>
      <IonFooter>Repeter</IonFooter>
    </IonPage>
  );
}

export default AddActivity;
