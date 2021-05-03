import React, { useReducer } from "react";
import { Button, Icon, TextField, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export function Prescription(props) {
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
      "drug": "string",
      "dose": 0,
      "p_notes": "string",
      "p_doctor": "string",
      "p_location": "string",
      "p_date": "string"
    }
  );

  const handleSubmit = evt => {
    evt.preventDefault();

    let data = { formInput };

    fetch("https://localhost:3000/prescriptions", {
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
       <h1>Prescription</h1>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {props.formName}
        </Typography>
        <Typography component="p">{props.formDescription}</Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="DRUG "
            id="margin-normal"
            name="drug"
            defaultValue={formInput.email}
            className={classes.textField}
            helperText=""
            onChange={handleInput}
          />
          <TextField
            label="DOSE "
            id="margin-normal"
            name="dose"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText=""
            onChange={handleInput}
          /><br/>
          <TextField
            label="NOTES"
            id="margin-normal"
            name="p_notes"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="Write notes"
            onChange={handleInput}
          /><br/>
          <TextField
            label="DOCTOR"
            id="margin-normal"
            name="p_doctor"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText=""
            onChange={handleInput}
          />
          <TextField
            label="PLACE"
            id="margin-normal"
            name="p_location"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText=""
            onChange={handleInput}
          />
          <TextField
            label="DATE"
            id="margin-normal"
            name="p_date"
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


