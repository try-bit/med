import React from "react";
import { MaterialUIFormSubmit } from "./MaterialUIFormSubmit";
import {Route,Link} from 'react-router-dom';
import Navbar from "./Navbar";
import { Allergy} from "./Allergy";
import { BloodPressure } from "./BloodPressure";
import { FamHistory } from "./FamHistory";
import { PersonalInfo } from "./PersonalInfo";
import { SPO2 } from "./SPO2";
import { ContactInfo} from "./ContactInfo";
import { EmergencyInfo} from "./EmergencyInfo";
import { Examination} from "./Examination";
import { Pathology} from "./Pathology";
import { Prescription} from "./Prescription";
import { Radiology} from "./Radiology";
import { Surgery} from "./Surgery";
import { Vaccine} from "./Vaccine";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route exact path="/materialUIFormSubmit" component={MaterialUIFormSubmit}/>
      
      <Route exact path="/allergy" component={ Allergy}/>
      <Route exact path="/bloodPressure" component={ BloodPressure }/>
      <Route exact path="/contactInfo" component={ContactInfo}/>
      <Route exact path="/emergencyInfo" component={EmergencyInfo}/>
      <Route exact path="/examination" component={Examination}/>
      <Route exact path="/famHistory" component={FamHistory}/>
      <Route exact path="/personalInfo" component={PersonalInfo}/>
      <Route exact path="/pathology" component={Pathology}/>
      <Route exact path="/prescription" component={Prescription}/>
      <Route exact path="/radiology" component={Radiology}/>
      <Route exact path="/sPO2" component={SPO2}/>
      <Route exact path="/surgery" component={Surgery}/>
      <Route exact path="/vaccine" component={Vaccine}/>

      
      
     
    </div>
    
  );
}

export default App;