import { IonContent, IonGrid, IonPage, IonTitle } from '@ionic/react';
import Nav from '../components/navBar';
import './Workouts.css';

const Workout: React.FC = () => {
  return (
    <IonPage>
      <IonTitle className="workoutTitle">Work Outs</IonTitle>
      <IonContent fullscreen>
        <IonGrid>
          {/* <ActionBar load={true} save={true} /> */}
          <Nav />
          
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Workout;
