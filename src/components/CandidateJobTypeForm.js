import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CandidateJobTypeForm = ({
  classes,
  sm_screen,
  inputHandler,
  job,
  error,
  clearError,
}) => {
  return (
    <Box
      component="form"
      sx={
        {
          // "& .MuiTextField-root": { m: 1, width: "100%" },
        }
      }
      className={classes.form_container}
      noValidate
      autoComplete="off"
      InputProps={{
        endAdornment: <img src={require("../asset/icons/input_icon.png")} />,
        style: {
          paddingRight: "0px",
        },
      }}
    >
      <Grid container={!sm_screen} spacing={2}>
        <Grid item sm={6}>
          <TextField
            InputProps={{ type: "number", inputProps: { min: 10 } }}
            error={error.hourly_rate.isError}
            helperText={error.hourly_rate.message}
            onFocus={() => clearError("hourly_rate")}
            id="Hourly rate*"
            label="Hourly rate*"
            name="hourly_rate"
            InputLabelProps={{ shrink: true }}
            placeholder="enter value..."
            sx={{ width: "100%", my: "1rem" }}
            value={job.candidate_type.hourly_rate}
            onChange={(e) => inputHandler(e, "candidate_type")}
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            // error
            id="Expected start date*"
            label="Expected start date*"
            name="expected_start_date"
            InputLabelProps={{ shrink: true }}
            placeholder="enter value..." // helperText="Incorrect entry."
            sx={{ width: "100%", my: "1rem" }}
            InputProps={{
              endAdornment: (
                <img src={require("../asset/icons/input_icon.png")} />
              ),
              style: {
                paddingRight: "0px",
              },
            }}
            value={job.candidate_type.expected_start_date}
            onChange={(e) => inputHandler(e, "candidate_type")}
          />
        </Grid>
      </Grid>
      <Grid container={!sm_screen} spacing={2}>
        <Grid item sm={6}>
          <TextField
            // error
            id="Career level*"
            label="Career level*"
            name="career_level"
            InputLabelProps={{ shrink: true }}
            placeholder="enter value..."
            sx={{ width: "100%", my: "1rem" }}
            InputProps={{
              endAdornment: (
                <img src={require("../asset/icons/input_icon.png")} />
              ),
              style: {
                paddingRight: "0px",
              },
            }}
            value={job.candidate_type.career_level}
            onChange={(e) => inputHandler(e, "candidate_type")}
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            // error
            id="Career level*"
            label="Career level*"
            name="gender"
            InputLabelProps={{ shrink: true }}
            placeholder="enter value..."
            sx={{ width: "100%", my: "1rem" }}
            InputProps={{
              endAdornment: (
                <img src={require("../asset/icons/input_icon.png")} />
              ),
              style: {
                paddingRight: "0px",
              },
            }}
            value={job.candidate_type.gender}
            onChange={(e) => inputHandler(e, "candidate_type")}
          />
        </Grid>
      </Grid>
      <Grid>
        <Grid item sm={12}>
          <TextField
            // error
            type="text"
            multiline
            rows={5}
            // maxRows={}
            id="Equipment specification*"
            label="Equipment specification*"
            name="equipment_specification"
            InputLabelProps={{ shrink: true }}
            placeholder="enter value..."
            sx={{ width: "100%", my: "1rem" }}
            value={job.candidate_type.equipment_specification}
            onChange={(e) => inputHandler(e, "candidate_type")}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CandidateJobTypeForm;
