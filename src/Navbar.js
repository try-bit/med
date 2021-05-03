import React from 'react'
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

 
function Navbar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button variant="contained" color="primary">

           
        
           <li ><a href="/materialUIFormSubmit">submit</a>   </li>
            </Button>
          
            <Button variant="contained" color="secondary">

           <li><a href="allergy">allergy</a></li>
            </Button>
            <br/>
            <Button variant="contained" color="primary">
               <li><a href="/bloodPressure">Blood Pressure</a>  </li> </Button>
               
               <Button variant="contained" color="secondary">
                    <li> <a href="/famHistory">Family History</a>  </li></Button><br/>
               <Button variant="contained" color="primary">
               <li><a href="/personalInfo">Personal Info</a>  </li></Button>
               <Button variant="contained" color="secondary">

               <li> <a href="/sPO2">SPO2</a>,  </li>
               </Button><br/>
               <Button variant="contained" color="primary">

               <li><a href="/vaccine">Vaccine</a></li>
               </Button>
               <Button variant="contained" color="secondary">

               <li><a href="/contactInfo">Contact Info</a></li>
               </Button><br/>
               <Button variant="contained" color="primary">

               <li>  <a href="/emergencyInfo">Emergency Info</a></li>
               </Button>
               <Button variant="contained" color="secondary">

               <li> <a href="/examination">Examination</a></li>
               </Button><br/>
               <Button variant="contained" color="primary">

               <li> <a href="/pathology">Pathology</a></li>
               </Button>
               <Button variant="contained" color="secondary">

               <li> <a href="/prescription">Prescription</a></li>
               </Button><br/>
               <Button variant="contained" color="primary">

               <li> <a href="/radiology">Radiology</a></li>
               </Button>
               <Button variant="contained" color="secondary">

               <li><a href="/surgery">Surgery</a>  </li>
               </Button><br/>
              
               <Button variant="contained" color="primary">
               <li> <a href="/vaccine">Vaccine</a>
                   
               
               </li>
               </Button><br/>
               
               
               
               
               
               

               
        </div>
    )
}

export default Navbar