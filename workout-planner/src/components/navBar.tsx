// You must import every ionic UI component you use in this file 
import { IonCol, IonGrid, IonIcon, IonItem, IonRow } from '@ionic/react';
//Import icons if needed
import { addOutline, barbellSharp, closeOutline, createOutline, listOutline } from 'ionicons/icons';
import React from 'react';
//Import custom style sheet 
import './nav.css';


//interface for props 
interface Props {
    //areas you can edit from App.tsx
}

//function component declaration 
const Nav: React.FC<Props> = props => {

    // Front End element for UI in the return statement 
    return(
       
            <div className="containerCenter">
                <div className="nav">
                    <IonGrid>
                        <IonRow className="ion-justify-content-center">
                            {/* Workouts add button */}
                            <IonCol className="ion-hide">
                                <IonItem  lines="none">
                                    <IonIcon icon = { addOutline } />
                                </IonItem>
                            </IonCol>
                            {/* Workouts */}
                            <IonCol>
                                <IonItem lines="none">
                                    <IonIcon icon = { listOutline } />
                                </IonItem>
                            </IonCol>
                            {/* Plus - open into menu */}
                            <IonCol className="ion-hide">
                                <IonItem className="btn " lines="none">
                                    <IonIcon icon = { addOutline } />
                                </IonItem>
                            </IonCol>
                            {/* close - close menu */}
                            <IonCol className="ion-align-self-center">
                                <IonItem className="btn center" lines="none">
                                    <IonIcon icon = { closeOutline } />
                                </IonItem>
                            </IonCol>
                            {/* Exercise */}
                            <IonCol>
                                <IonItem lines="none">
                                    <IonIcon icon = { barbellSharp } />
                                </IonItem>

                            </IonCol>
                            {/* Edit exercise */}
                            <IonCol className="ion-hide">
                                <IonItem lines="none">
                                    <IonIcon icon={ createOutline } />
                                </IonItem>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </div>
            </div>
      
    );
};

export default Nav;