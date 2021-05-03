import React, { useReducer } from "react";
import { Button, Icon, TextField, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export function BloodPressure(props) {
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
      "systolic": 0,
      "diastolic": 0,
      "pulse": 0,
      "b_date": "string",
      "b_notes": "string"
    }
  );

  const handleSubmit = evt => {
    evt.preventDefault();

    let data = { formInput };

    fetch("https://localhost:3000/blood-pressures", {
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
       <h1>Blood Pressure</h1>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {props.formName}
        </Typography>
        <Typography component="p">{props.formDescription}</Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="SYSTOLIC"
            id="margin-normal"
            name="systolic"
            defaultValue={formInput.email}
            className={classes.textField}
            helperText=""
            onChange={handleInput}
          />
          <TextField
            label="DIASTOLIC"
            id="margin-normal"
            name="diastolic"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText=""
            onChange={handleInput}
          /><br/>
          <TextField
            label="PULSE"
            id="margin-normal"
            name="pulse"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText=""
            onChange={handleInput}
          /><br/>
          <TextField
            label="DATE"
            id="margin-normal"
            name="b_dates"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="DD/MM/YYYY"
            onChange={handleInput}
          /><br/>
          <TextField
            label="NOTES"
            id="margin-normal"
            name="b_notes"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText=""
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


