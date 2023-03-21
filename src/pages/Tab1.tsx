import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import {HeyPage} from "../components/Hey"
import './Tab1.css';
import { useState,useEffect } from 'react';

const Tab1: React.FC = () => {

 
  const [Name,SetName] = useState("")

  // useEffect(()=>{
  //   console.log(Name)
  // },[Name])


  // [] fires only once
  //

  function Submit (){
    console.log(Name)
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">INPUTS IN IONIC MOBILE APP</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <HeyPage/>


        <input type="text" className='input-field' onChange={(e)=>{SetName(e.target.value)}}/>


        <button type='button' onClick={Submit}> SUBMIT</button>



        {/* <ExploreContainer name="Tab 1 page" /> */}


      </IonContent>
    </IonPage>
  );
};

export default Tab1;
