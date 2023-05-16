import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import './Tab1.css';
import { useState } from 'react';
import axios from "axios"
const Tab3: React.FC = () => {

 
  const [userDetails,setUserDetails] = useState({
    name:"",
    email:"",
    gender: "",
  })

  function SubmitButton (e:any){
    e.preventDefault();

    axios.post("http://localhost/php-server/api/php-end-point.php",{...userDetails}).then((response)=>{
      console.log("response---->", response.data)
      alert("API SUCCESSFULLY PASSED")
    }).catch((error)=>{
      console.log("response---->", error)
      alert("API ERROR")
    })
      
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>PHP BACKEND</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">INPUTS IN IONIC MOBILE APP</IonTitle>
          </IonToolbar>
        </IonHeader>
        <br/> <br/> <br/> <br/>

        <form onSubmit={SubmitButton}>
        <label>Name</label>
        <input type="text" className='input-field' onChange={(e)=>{setUserDetails({
          ...userDetails,
          name:e.target.value
        })}}/>
        
        <label>Email</label>
        <input type="text" className='input-field' onChange={(e)=>{setUserDetails({
          ...userDetails,
          email:e.target.value
        })}}/>
        
        <label>Gender</label>
        <input type="text" className='input-field' onChange={(e)=>{setUserDetails({
          ...userDetails,
          gender:e.target.value
        })}}/>

        <IonButton type='submit'> SUBMIT</IonButton>
        </form>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
