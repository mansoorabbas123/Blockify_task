import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const JobInformationForm = ({
  classes,
  sm_screen,
  job,
  inputHandler,
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
    >
      <Grid container={!sm_screen} spacing={2}>
        <Grid item sm={6}>
          <TextField
            error={error.job_title.isError}
            helperText={error.job_title.message}
            required
            name="looking_for"
            id="Looking for*"
            label="Looking for*"
            InputLabelProps={{ shrink: true }}
            placeholder="enter value..."
            sx={{ width: "100%", my: "1rem" }}
            onFocus={() => clearError("job_title")}
            InputProps={{
              endAdornment: (
                <img src={require("../asset/icons/input_icon.png")} />
              ),
              style: {
                paddingRight: "0px",
              },
            }}
            value={job.job_information.looking_for}
            onChange={(e) => inputHandler(e, "job_information")}
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            error={error.experience.isError}
            id="Experience*"
            name="experience"
            label="Experience*"
            InputLabelProps={{ shrink: true }}
            placeholder="enter value..."
            helperText={error.experience.message}
            onFocus={() => clearError("experience")}
            sx={{ width: "100%", my: "1rem" }}
            InputProps={{
              endAdornment: (
                <img src={require("../asset/icons/input_icon.png")} />
              ),
              style: {
                paddingRight: "0px",
              },
            }}
            value={job.job_information.experience}
            onChange={(e) => inputHandler(e, "job_information")}
          />
        </Grid>
      </Grid>
      <Grid container={!sm_screen} spacing={2}>
        <Grid item sm={6}>
          <TextField
            // error
            id="Education*"
            label="Education*"
            name="education"
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
            value={job.job_information.education}
            onChange={(e) => inputHandler(e, "job_information")}
          />
        </Grid>
        <Grid item sm={6}>
          <div style={{ width: "100%" }}></div>
        </Grid>
      </Grid>
      <Grid>
        <Grid item sm={12}>
          <TextField
            // error
            id="Skills*"
            label="Skills*"
            name="skills"
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
            value={job.job_information.skills}
            onChange={(e) => inputHandler(e, "job_information")}
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
            name="description"
            // maxRows={}
            id="oDescription*"
            label="Description*"
            InputLabelProps={{ shrink: true }}
            placeholder="enter value..."
            sx={{ width: "100%", my: "1rem" }}
            value={job.job_information.description}
            onChange={(e) => inputHandler(e, "job_information")}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default JobInformationForm;
