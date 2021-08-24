// You must import every ionic UI component you use in this file 
import { IonButton, IonCol, IonIcon, IonRow, IonSearchbar } from '@ionic/react';
//Import icons if needed
import { addOutline, cloudDownloadOutline, saveOutline } from 'ionicons/icons';
import React from 'react';
//Import custom style sheet 
import './actionbar.css';

//interface for props 
interface Props {
    //areas you can edit from App.tsx
    load?: true | false,
    save?: true | false,
    searchbar?: true | false,
    add?: true | false,
    done?: true | false

}

//function component declaration 
const ActionBar: React.FC<Props> = props => {
    

    // Front End element for UI in the return statement 
    return(
        <IonRow>
            {/* search */}
            <IonCol>
                <IonSearchbar mode="ios" className="ion-no-padding" />
            </IonCol>
            {/* load */}
            <IonCol size="2" className="flexCenter">
                <IonButton shape="round" size="small" className="loadSaveBtn">
                    <IonIcon slot="icon-only" icon={cloudDownloadOutline} />
                </IonButton>
            </IonCol>
            {/* save */}
            <IonCol size="2" className="flexCenter">
                <IonButton id="loadsave" shape="round" size="small" className="loadSaveBtns">
                    <IonIcon slot="icon-only" icon={saveOutline} />
                </IonButton>
            </IonCol>
            {/* add */}
            <IonCol>
                <IonButton shape="round" size="small" className="loadSaveBtns">
                    <IonIcon slot="icon-only" icon={addOutline} />
                </IonButton>
            </IonCol>
            {/* Done */}
            <IonCol>
                
            </IonCol>
        </IonRow>
    );
};

export default ActionBar;