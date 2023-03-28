import styled from "@emotion/styled";
import { Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { SingleInputTimeRangeField } from "@mui/x-date-pickers-pro/SingleInputTimeRangeField";
import dayjs from "dayjs";

const ShiftTimingsForm = ({
  classes,
  sm_screen,
  shedule,
  setShedule,
  error,
}) => {
  if (error.shift_timing_error.isError) {
    alert(error.shift_timing_error.message);
  }
  return (
    <Box>
      <Typography
        sx={{ fontSize: sm_screen ? "0.6rem" : "1rem", my: 3 }}
        color="#212529"
      >
        Complete the following steps to create an effective job post
      </Typography>
      <Divider />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          curser: "pointer",
          my: 4,
        }}
      >
        {shedule.map((s) => (
          <Box
            key={s.day}
            sx={{
              px: 3,
              py: 2,
              background: s.active ? "#006AB3" : "#EFECEC",
              color: s.active ? "#fff" : "#ACACAC",
              borderRadius: "5px",
            }}
            onClick={() =>
              setShedule((prvShedule) => {
                return prvShedule.map((prv) => {
                  if (prv.day === s.day) {
                    if (prvShedule.filter((sf) => sf.active).length < 3) {
                      return { ...prv, active: true };
                    }
                    return { ...prv, active: !prv.active };
                  } else {
                    return prv;
                  }
                });
              })
            }
          >
            {s.day.split("")[0].toUpperCase()}
          </Box>
        ))}
      </Box>

      <Grid container={!sm_screen} spacing={2}>
        <Grid item sx={{ my: 2 }} sm={6}>
          <DemoContainer
            components={[
              "SingleInputTimeRangeField",
              "SingleInputTimeRangeField",
            ]}
          >
            <SingleInputTimeRangeField
              value={shedule[0].time_range}
              InputLabelProps={{ shrink: false }}
              minTime={dayjs().set("hour", 9).startOf("hour")}
              disabled={!shedule[0].active}
              sx={{
                "& .MuiInputBase-input": {
                  width: "100%",
                  textAlign: "center",
                  transformOrigin: "center",
                  "&.Mui-focused": {
                    transformOrigin: "center",
                  },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
              onChange={(newValue) => {
                setShedule(
                  shedule.map((s) => {
                    if (s.day === "sunday") {
                      return { ...s, time_range: newValue };
                    } else {
                      return s;
                    }
                  })
                );
              }}
              InputProps={{
                startAdornment: (
                  <div
                    style={{
                      backgroundColor: shedule[0].active
                        ? "#006AB3"
                        : "#D5D8DA",
                      padding: "1rem",
                      color: shedule[0].active ? "#fff" : "#ACACAC",
                      borderRadius: "10px",
                      width: "200px",
                    }}
                  >
                    {shedule[0].day.toUpperCase()}
                  </div>
                ),
                style: {
                  paddingLeft: "0px",
                  textAlign: "center",
                  backgroundColor: "#EFECEC",
                  borderRadius: "10px",
                },
              }}
            />
          </DemoContainer>
        </Grid>
        <Grid item sx={{ my: 2 }} sm={6}>
          <DemoContainer
            components={[
              "SingleInputTimeRangeField",
              "SingleInputTimeRangeField",
            ]}
          >
            <SingleInputTimeRangeField
              value={shedule[1].time_range}
              shouldDisableTime={() => true}
              InputLabelProps={{ shrink: false }}
              sx={{
                "& .MuiInputBase-input": {
                  width: "100%",
                  textAlign: "center",
                  transformOrigin: "center",
                  "&.Mui-focused": {
                    transformOrigin: "center",
                  },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
              disabled={!shedule[1].active}
              InputProps={{
                startAdornment: (
                  <div
                    style={{
                      backgroundColor: shedule[1].active
                        ? "#006AB3"
                        : "#D5D8DA",
                      padding: "1rem",
                      color: shedule[1].active ? "#fff" : "#ACACAC",
                      borderRadius: "10px",
                      width: "200px",
                    }}
                  >
                    {shedule[1].day.toUpperCase()}
                  </div>
                ),
                style: {
                  paddingLeft: "0px",
                  textAlign: "center",
                  backgroundColor: "#EFECEC",
                  borderRadius: "10px",
                },
              }}
              onChange={(newValue) =>
                setShedule(
                  shedule.map((s) => {
                    if (s.day === "monday") {
                      return { ...s, time_range: newValue };
                    } else {
                      return s;
                    }
                  })
                )
              }
            />
          </DemoContainer>
        </Grid>
      </Grid>
      <Grid container={!sm_screen} spacing={2}>
        <Grid item sx={{ my: 2 }} sm={6}>
          <DemoContainer
            components={[
              "SingleInputTimeRangeField",
              "SingleInputTimeRangeField",
            ]}
          >
            <SingleInputTimeRangeField
              value={shedule[2].time_range}
              InputLabelProps={{ shrink: false }}
              disabled={!shedule[2].active}
              sx={{
                "& .MuiInputBase-input": {
                  width: "100%",
                  textAlign: "center",
                  transformOrigin: "center",
                  "&.Mui-focused": {
                    transformOrigin: "center",
                  },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
              onChange={(newValue) =>
                setShedule(
                  shedule.map((s) => {
                    if (s.day === "tuesday") {
                      return { ...s, time_range: newValue };
                    } else {
                      return s;
                    }
                  })
                )
              }
              InputProps={{
                startAdornment: (
                  <div
                    style={{
                      backgroundColor: shedule[2].active
                        ? "#006AB3"
                        : "#D5D8DA",
                      padding: "1rem",
                      color: shedule[2].active ? "#fff" : "#ACACAC",
                      borderRadius: "10px",
                      width: "200px",
                    }}
                  >
                    {shedule[2].day.toUpperCase()}
                  </div>
                ),
                style: {
                  paddingLeft: "0px",
                  textAlign: "center",
                  backgroundColor: "#EFECEC",
                  borderRadius: "10px",
                },
              }}
            />
          </DemoContainer>
        </Grid>
        <Grid item sx={{ my: 2 }} sm={6}>
          <DemoContainer
            components={[
              "SingleInputTimeRangeField",
              "SingleInputTimeRangeField",
            ]}
          >
            <SingleInputTimeRangeField
              value={shedule[3].time_range}
              InputLabelProps={{ shrink: false }}
              disabled={!shedule[3].active}
              sx={{
                "& .MuiInputBase-input": {
                  width: "100%",
                  textAlign: "center",
                  transformOrigin: "center",
                  "&.Mui-focused": {
                    transformOrigin: "center",
                  },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
              InputProps={{
                startAdornment: (
                  <div
                    style={{
                      backgroundColor: shedule[3].active
                        ? "#006AB3"
                        : "#D5D8DA",
                      padding: "1rem",
                      color: shedule[3].active ? "#fff" : "#ACACAC",
                      borderRadius: "10px",
                      width: "200px",
                    }}
                  >
                    {shedule[3].day.toUpperCase()}
                  </div>
                ),
                style: {
                  paddingLeft: "0px",
                  textAlign: "center",
                  backgroundColor: "#EFECEC",
                  borderRadius: "10px",
                },
              }}
              onChange={(newValue) =>
                setShedule(
                  shedule.map((s) => {
                    if (s.day === "wednesday") {
                      return { ...s, time_range: newValue };
                    } else {
                      return s;
                    }
                  })
                )
              }
            />
          </DemoContainer>
        </Grid>
      </Grid>
      <Grid container={!sm_screen} spacing={2}>
        <Grid item sx={{ my: 2 }} sm={6}>
          <DemoContainer
            components={[
              "SingleInputTimeRangeField",
              "SingleInputTimeRangeField",
            ]}
          >
            <SingleInputTimeRangeField
              value={shedule[4].time_range}
              InputLabelProps={{ shrink: false }}
              disabled={!shedule[4].active}
              sx={{
                "& .MuiInputBase-input": {
                  width: "100%",
                  textAlign: "center",
                  transformOrigin: "center",
                  "&.Mui-focused": {
                    transformOrigin: "center",
                  },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
              onChange={(newValue) =>
                setShedule(
                  shedule.map((s) => {
                    if (s.day === "thursday") {
                      return { ...s, time_range: newValue };
                    } else {
                      return s;
                    }
                  })
                )
              }
              InputProps={{
                startAdornment: (
                  <div
                    style={{
                      backgroundColor: shedule[4].active
                        ? "#006AB3"
                        : "#D5D8DA",
                      padding: "1rem",
                      color: shedule[4].active ? "#fff" : "#ACACAC",
                      borderRadius: "10px",
                      width: "200px",
                    }}
                  >
                    {shedule[4].day.toUpperCase()}
                  </div>
                ),
                style: {
                  paddingLeft: "0px",
                  textAlign: "center",
                  backgroundColor: "#EFECEC",
                  borderRadius: "10px",
                },
              }}
            />
          </DemoContainer>
        </Grid>
        <Grid item sx={{ my: 2 }} sm={6}>
          <DemoContainer
            components={[
              "SingleInputTimeRangeField",
              "SingleInputTimeRangeField",
            ]}
          >
            <SingleInputTimeRangeField
              value={shedule[5].time_range}
              InputLabelProps={{ shrink: false }}
              disabled={!shedule[5].active}
              sx={{
                "& .MuiInputBase-input": {
                  width: "100%",
                  textAlign: "center",
                  transformOrigin: "center",
                  "&.Mui-focused": {
                    transformOrigin: "center",
                  },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
              InputProps={{
                startAdornment: (
                  <div
                    style={{
                      backgroundColor: shedule[5].active
                        ? "#006AB3"
                        : "#D5D8DA",
                      padding: "1rem",
                      color: shedule[5].active ? "#fff" : "#ACACAC",
                      borderRadius: "10px",
                      width: "200px",
                    }}
                  >
                    {shedule[5].day.toUpperCase()}
                  </div>
                ),
                style: {
                  paddingLeft: "0px",
                  textAlign: "center",
                  backgroundColor: "#EFECEC",
                  borderRadius: "10px",
                },
              }}
              onChange={(newValue) =>
                setShedule(
                  shedule.map((s) => {
                    if (s.day === "friday") {
                      return { ...s, time_range: newValue };
                    } else {
                      return s;
                    }
                  })
                )
              }
            />
          </DemoContainer>
        </Grid>
      </Grid>
      <Grid container={!sm_screen} spacing={2}>
        <Grid item sx={{ my: 2 }} sm={6}>
          <DemoContainer
            components={[
              "SingleInputTimeRangeField",
              "SingleInputTimeRangeField",
            ]}
          >
            <SingleInputTimeRangeField
              value={shedule[6].time_range}
              InputLabelProps={{ shrink: false }}
              disabled={!shedule[6].active}
              sx={{
                "& .MuiInputBase-input": {
                  width: "100%",
                  textAlign: "center",
                  transformOrigin: "center",
                  "&.Mui-focused": {
                    transformOrigin: "center",
                  },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
              onChange={(newValue) =>
                setShedule(
                  shedule.map((s) => {
                    if (s.day === "satureday") {
                      return { ...s, time_range: newValue };
                    } else {
                      return s;
                    }
                  })
                )
              }
              InputProps={{
                startAdornment: (
                  <div
                    style={{
                      backgroundColor: shedule[6].active
                        ? "#006AB3"
                        : "#D5D8DA",
                      padding: "1rem",
                      color: shedule[6].active ? "#fff" : "#ACACAC",
                      borderRadius: "10px",
                      width: "200px",
                    }}
                  >
                    {shedule[6].day.toUpperCase()}
                  </div>
                ),
                style: {
                  paddingLeft: "0px",
                  textAlign: "center",
                  backgroundColor: "#EFECEC",
                  borderRadius: "10px",
                },
              }}
            />
          </DemoContainer>
        </Grid>
        <Grid item sx={{ my: 2 }} sm={6}>
          {/* <DemoContainer
            components={[
              "SingleInputTimeRangeField",
              "SingleInputTimeRangeField",
            ]}
          >
            <SingleInputTimeRangeField
              value={shedule[1].range}
              InputLabelProps={{ shrink: false }}
              sx={{
                "& .MuiInputBase-input": {
                  width: "100%",
                  textAlign: "center",
                  transformOrigin: "center",
                  "&.Mui-focused": {
                    transformOrigin: "center",
                  },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
              InputProps={{
                startAdornment: (
                  <div style={{ backgroundColor: "#006AB3" }}>Tuesday</div>
                ),
                style: {
                  paddingLeft: "0px",
                  textAlign: "center",
                  backgroundColor: "#EFECEC",
                  borderRadius: "10px",
                },
              }}
              onChange={(newValue) => setMonday(newValue)}
            />
          </DemoContainer> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShiftTimingsForm;
