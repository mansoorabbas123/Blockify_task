import { Box, Divider, Typography, Button, Step, Stepper } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@emotion/react";
import JobInformationForm from "../components/JobInformationForm";
import CandidateJobTypeForm from "../components/CandidateJobTypeForm";
import ShiftTimingsForm from "../components/ShiftTimingsForm";
import dayjs from "dayjs";
const steps = ["Job Information", "Candidate Type", "Shift Timings"];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  wizard: {
    margin: "5rem auto 0 auto",
    backgroundColor: "#fff",
    width: "80%",
    boxShadow: "0px 0px 15px rgba(219,216,234,0.5 )",
    borderRadius: "20px",
  },
  wizard_header: {
    padding: "3.5rem 3.5rem 1.5rem 3.5rem",
  },
  wizard_body: {
    padding: "2rem 3.5rem",
  },
  step: {
    width: "100%",
    backgroundColor: "#EAEAEA",
    padding: "1.5rem",
    textAlign: "center",
    color: "#495057",
  },
  form_container: {
    marginTop: "3rem",
    marginBottom: "3rem",
  },
});

const JobWizard = () => {
  const [job, setJob] = useState({
    job_information: {
      looking_for: null,
      experience: null,
      education: null,
      skills: null,
      description: null,
    },
    candidate_type: {
      hourly_rate: null,
      expected_start_date: null,
      career_level: null,
      gender: null,
      equipment_specification: null,
    },
  });
  const [schedule, setSchedule] = useState([
    {
      day: "sunday",
      time_range: [dayjs("2022-04-17T09:00"), dayjs("2022-04-17T18:00")],
      active: false,
    },
    {
      day: "monday",
      time_range: [dayjs("2022-04-17T09:00"), dayjs("2022-04-17T18:00")],
      active: true,
    },
    {
      day: "tuesday",
      time_range: [dayjs("2022-04-17T09:00"), dayjs("2022-04-17T18:00")],
      active: true,
    },
    {
      day: "wednesday",
      time_range: [dayjs("2022-04-17T09:00"), dayjs("2022-04-17T18:00")],
      active: true,
    },
    {
      day: "thursday",
      time_range: [dayjs("2022-04-17T09:00"), dayjs("2022-04-17T18:00")],
      active: true,
    },
    {
      day: "friday",
      time_range: [dayjs("2022-04-17T09:00"), dayjs("2022-04-17T18:00")],
      active: true,
    },
    {
      day: "satureday",
      time_range: [dayjs("2022-04-17T09:00"), dayjs("2022-04-17T18:00")],
      active: false,
    },
  ]);
  const [error, setError] = useState({
    job_title: {
      isError: false,
      message: null,
    },
    experience: {
      isError: false,
      message: null,
    },
    hourly_rate: {
      isError: false,
      message: null,
    },
    shift_timing_error: {
      isError: false,
      message: null,
    },
  });

  const inputHandler = (e, type) => {
    switch (type) {
      case "job_information":
        {
          setJob({
            ...job,
            job_information: {
              ...job.job_information,
              [e.target.name]: e.target.value,
            },
          });
        }
        break;
      case "candidate_type":
        {
          setJob({
            ...job,
            candidate_type: {
              ...job.candidate_type,
              [e.target.name]: e.target.value,
            },
          });
        }
        break;
      default:
        break;
    }
  };

  //   mui style hooks
  const classes = useStyles();
  const theme = useTheme();
  const sm_screen = useMediaQuery(theme.breakpoints.down("sm"));

  //   mui stepper logic
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    clearAllErrors();

    // error handling
    if (!job.job_information.looking_for) {
      createError("job_title", "Job title is required");
      return;
    }
    if (!job.job_information.experience) {
      createError("experience", "Experience is required");
      return;
    }
    if (!job.candidate_type.hourly_rate && activeStep == 1) {
      createError("hourly_rate", "Hourly rate is required");
      return;
    }
    if (Number(job.candidate_type.hourly_rate) < 10 && activeStep == 1) {
      createError("hourly_rate", "Hourly rate should not be less than 10");
      return;
    }
    let find = false;
    if (activeStep == 2) {
      schedule.forEach((sc) => {
        if (sc.time_range[0].hour() === sc.time_range[1].hour()) {
          find = true;
          createError(
            "shift_timing_error",
            "Start and end time should not be same"
          );
        }
      });
    }
    if (find) {
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const clearAllErrors = () => {
    setError({
      job_title: {
        isError: false,
        message: null,
      },
      experience: {
        isError: false,
        message: null,
      },
      hourly_rate: {
        isError: false,
        message: null,
      },
      shift_timing_error: {
        isError: false,
        message: null,
      },
    });
  };

  const createError = (key, message) => {
    setError({
      ...error,
      [key]: {
        isError: true,
        message,
      },
    });
  };

  const clearError = (type) => {
    setError({
      ...error,
      [type]: {
        isError: false,
        message: null,
      },
    });
  };

  return (
    <Box classsName={classes.root}>
      <Box component="div" className={classes.wizard}>
        <Box className={classes.wizard_header}>
          <Typography
            sx={{ fontSize: sm_screen ? "1.5rem" : "2.25rem" }}
            color="primary"
          >
            CREATE A JOB POST
          </Typography>
          <Typography
            sx={{ fontSize: sm_screen ? "0.6rem" : "1rem" }}
            color="#212529"
            paddingTop="0.3rem"
          >
            Complete the following steps to create an effective job post
          </Typography>
        </Box>
        <Divider />
        <Box className={classes.wizard_body}>
          <Typography color="#006BB3" sx={{ mb: 2 }}>
            Step {activeStep + 1} of 3
          </Typography>
          <Box sx={{ width: "100%" }}>
            <Stepper
              activeStep={activeStep}
              connector={null}
              sx={{
                backgroundColor: "#EAEAEA",
                flexWrap: sm_screen ? "wrap" : "nowrap",
              }}
            >
              {steps.map((label, index) => {
                return (
                  <Step
                    key={label}
                    className={classes.step}
                    sx={{
                      borderRight:
                        index !== steps.length - 1
                          ? "1px solid #DEE2E6"
                          : "none",
                      backgroundColor:
                        index <= activeStep ? "#006AB3 !important" : "#EAEAEA",
                      color:
                        index <= activeStep ? "#fff !important" : "#495057",
                      borderTopRightRadius:
                        index === activeStep && index !== steps.length - 1
                          ? "50px"
                          : "none",
                      borderBottomRightRadius:
                        index === activeStep && index !== steps.length - 1
                          ? "50px"
                          : "none",
                    }}
                  >
                    {label}
                  </Step>
                );
              })}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  Job has been created successfully
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {activeStep === 0 && (
                  <JobInformationForm
                    classes={classes}
                    sm_screen={sm_screen}
                    inputHandler={inputHandler}
                    job={job}
                    error={error}
                    clearError={clearError}
                  />
                )}

                {activeStep === 1 && (
                  <CandidateJobTypeForm
                    classes={classes}
                    sm_screen={sm_screen}
                    inputHandler={inputHandler}
                    job={job}
                    error={error}
                    clearError={clearError}
                  />
                )}
                {activeStep === 2 && (
                  <ShiftTimingsForm
                    classes={classes}
                    sm_screen={sm_screen}
                    inputHandler={inputHandler}
                    job={job}
                    shedule={schedule}
                    setShedule={setSchedule}
                    error={error}
                  />
                )}

                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{
                      mr: 1,
                      backgroundColor: "#fff",
                      border: "1px solid grey",
                      color: "#8C8C8C",
                      width: "200px",
                    }}
                    color="primary"
                  >
                    PREVIOUS
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button
                    onClick={handleNext}
                    sx={{
                      backgroundColor: "#006AB3",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#007AB3",
                      },
                      width: "200px",
                    }}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default JobWizard;
