import React, { useReducer } from "react";
import { Button, Icon, TextField, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export function Examination(props) {
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    leftIcon: {
      marginRight: theme.spacing(1)
    },
    rightIcon: {
      marginLeft: theme.spacing(1)
    },
    iconSmall: {
      fontSize: 20
    },
    root: {
      padding: theme.spacing(3, 2)
    },
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 400
    }
  }));

  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      "symptoms": "string",
  "diagnosis": "string",
  "e_notes": "string",
  "e_doctor": "string",
  "E_LOCATION": "string",
  "E": "2021-04-12T06:37:24.554Z"
    }
  );

  const handleSubmit = evt => {
    evt.preventDefault();

    let data = { formInput };

    fetch("https://localhost:3000/examinations", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
  };

  const handleInput = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  const classes = useStyles();

  console.log(props);

  return (
    <div>
       <h1>Examination</h1>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {props.formName}
        </Typography>
        <Typography component="p">{props.formDescription}</Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="SYMPTOMS"
            id="margin-normal"
            name="symtoms"
            defaultValue={formInput.email}
            className={classes.textField}
            helperText="Eg. Fever,Cough,Cold"
            onChange={handleInput}
          />
          <TextField
            label="DIAGNOSIS"
            id="margin-normal"
            name="diagnosis"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText=""
            onChange={handleInput}
          /><br/>
          <TextField
            label="NOTES"
            id="margin-normal"
            name="e_notes"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText=""
            onChange={handleInput}
          /><br/>
          <TextField
            label="DOCTOR"
            id="margin-normal"
            name="e_doctor"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText=""
            onChange={handleInput}
          />
          <TextField
            label="PLACE"
            id="margin-normal"
            name="E_LOCATION"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText=""
            onChange={handleInput}
          />
          <TextField
            label="DATE"
            id="margin-normal"
            name="E"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="DD/MM/YYYY"
            onChange={handleInput}
          /><br/>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            SAVE
          </Button>
        </form>
      </Paper>
    </div>
  );
}


