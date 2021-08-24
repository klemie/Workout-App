import { IonContent, IonGrid, IonPage, IonTitle } from '@ionic/react';
import ActionBar from '../components/ActionBar';
import './Workouts.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonTitle className="workoutTitle">Work Outs</IonTitle>
      <IonContent fullscreen>
        <IonGrid>
          <ActionBar load={true} save={true} />
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
