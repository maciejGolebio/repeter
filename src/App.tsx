import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Activities from './pages/Activities/Activites';
import { PATHS } from './app.config';
import AddActivity from './pages/Activities/AddActivity';
import ActivityDetailsFC from './pages/Activities/ActivityDetails';
import AddActivityRepetition from './pages/Activities/AddActivityRepetition';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/page/Activities" />
            </Route>
            <Route path={PATHS.settings.url} exact={true}>
              <Page />
            </Route>
            <Route path={PATHS.activities.url} exact={true}>
              <Activities />
            </Route>
            <Route path={PATHS.addActivity.url} exact={true}>
              <AddActivity />
            </Route>
            <Route path={PATHS.activityDetails.url}>
              <ActivityDetailsFC />
            </Route>
            <Route path={PATHS.addActivityRepetition.url}>
              <AddActivityRepetition recordsType={{}} />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
