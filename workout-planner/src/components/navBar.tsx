// You must import every ionic UI component you use in this file 
import { IonCol, IonContent, IonGrid, IonIcon, IonItem, IonRow } from '@ionic/react';
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
        <IonContent>
            <div className="nav">
                <IonGrid>
                    <IonRow>
                        {/* Workouts add button */}
                        <IonCol>
                            <IonItem lines="none">
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
                        <IonCol>
                            <IonItem lines="none">
                                <IonIcon icon = { addOutline } />
                            </IonItem>
                        </IonCol>
                        {/* close - close menu */}
                        <IonCol>
                            <IonItem lines="none">
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
                        <IonCol>
                            <IonItem lines="none">
                                <IonIcon icon={ createOutline } />
                            </IonItem>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </div>
        </IonContent>
    );
};

export default Nav;