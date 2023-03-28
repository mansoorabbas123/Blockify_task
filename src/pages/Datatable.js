import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Grid, TextField } from "@mui/material";
import dayjs from "dayjs";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

var rows = [
  {
    id: 1,
    job_title: "software engineer",
    experience: 2,
    hourly_rate: 30,
    date: new Date(),
  },
  {
    id: 2,
    job_title: "graphic designer",
    experience: 3,
    hourly_rate: 40,
    date: new Date(),
  },
  {
    id: 3,
    job_title: "sqa engineer",
    experience: 3,
    hourly_rate: 20,
    date: new Date(),
  },
  {
    id: 4,
    job_title: "full stack developer",
    experience: 5,
    hourly_rate: 60,
    date: new Date(),
  },
  {
    id: 5,
    job_title: "blockchain developer",
    experience: 3,
    hourly_rate: 50,
    date: new Date(),
  },
];

const Datatable = () => {
  const [data, setData] = useState(rows);
  const [rowData, setRowDate] = useState(null);
  const [searchJob, setSearchJob] = useState("");
  console.log("data", data);
  const [job, setJob] = useState({
    job_title: "",
    experience: null,
    hourly_rate: null,
    date: new Date(),
  });

  // modal
  const [open, setOpen] = React.useState({ open: false, type: null });
  const handleOpen = (type) => setOpen({ open: true, type });
  const handleClose = () => {
    setOpen({ open: false, type: null });
    setJob({
      job_title: "",
      experience: null,
      hourly_rate: null,
      date: new Date(),
    });
  };

  useEffect(() => {
    if (rowData) {
      setJob({
        job_title: rowData.job_title,
        experience: rowData.experience,
        hourly_rate: rowData.hourly_rate,
        date: new Date(),
      });
    }
  }, [rowData]);

  const updateHandler = () => {
    if (job.job_title && job.experience && job.hourly_rate) {
      setData((prvData) =>
        prvData.map((d) => {
          if (d.id === rowData.id) {
            return { ...job, id: d.id };
          } else {
            return d;
          }
        })
      );
    }
    setJob({
      job_title: "",
      experience: null,
      hourly_rate: null,
      date: new Date(),
    });
    handleClose();
  };

  const createJobHandler = () => {
    if (job.job_title && job.experience && job.hourly_rate) {
      setData([
        ...data,
        {
          id: new Date().getTime(),
          job_title: job.job_title,
          experience: job.experience,
          hourly_rate: Number(job.hourly_rate),
          date: new Date(),
        },
      ]);
    }
    setJob({
      job_title: "",
      experience: null,
      hourly_rate: null,
      date: new Date(),
    });
    handleClose();
  };

  return (
    <Box>
      <TableContainer
        component={Paper}
        sx={{ width: "80%", margin: "auto", mt: 4 }}
      >
        <Box sx={{ p: 3, display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="contained"
            startIcon={<AddBoxIcon />}
            onClick={() => handleOpen("add")}
          >
            Create Job
          </Button>
          <TextField
            name="searchJob"
            id="searchJob"
            label="Search Job"
            // InputLabelProps={{ shrink: true }}
            // placeholder="enter value..."
            // sx={{ width: "100%", my: "1rem" }}
            value={searchJob}
            onChange={(e) => setSearchJob(e.target.value)}
          />
        </Box>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Job Title</TableCell>
              <TableCell align="center">Experience</TableCell>
              <TableCell align="center">Horly Rate</TableCell>
              <TableCell align="right">Created At</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .filter((row) => {
                if (searchJob == "") {
                  return row;
                } else if (
                  row.job_title.toLowerCase().includes(searchJob.toLowerCase())
                ) {
                  return row;
                }
              })
              .map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.job_title}
                  </TableCell>
                  <TableCell align="center">{row.experience} y</TableCell>
                  <TableCell align="center">{row.hourly_rate}$</TableCell>
                  <TableCell align="right">
                    {dayjs(row.date).format("YYYY-MM-DD")}
                  </TableCell>
                  <TableCell align="center">
                    <Box>
                      <Button
                        sx={{ marginRight: "7px" }}
                        variant="outlined"
                        startIcon={<EditIcon />}
                        onClick={() => {
                          setRowDate(row);
                          handleOpen("edit");
                        }}
                      >
                        edit
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        onClick={() =>
                          setData(data.filter((d) => d.id !== row.id))
                        }
                      >
                        Delete
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <Modal
          open={open.open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box component="form" noValidate autoComplete="off">
              <Grid spacing={2}>
                <Grid item sm={6}>
                  <TextField
                    required
                    name="job_title"
                    id="Job Title"
                    label="Job Title*"
                    InputLabelProps={{ shrink: true }}
                    placeholder="enter value..."
                    sx={{ width: "100%", my: "1rem" }}
                    value={job.job_title}
                    onChange={(e) =>
                      setJob({ ...job, job_title: e.target.value })
                    }
                  />
                </Grid>
                <Grid item sm={6}>
                  <TextField
                    required
                    name="experience"
                    label="Experience*"
                    InputLabelProps={{ shrink: true }}
                    placeholder="enter value..."
                    sx={{ width: "100%", my: "1rem" }}
                    value={job.experience}
                    onChange={(e) =>
                      setJob({ ...job, experience: e.target.value })
                    }
                  />
                </Grid>
              </Grid>

              <Grid>
                <Grid item sm={12}>
                  <TextField
                    required
                    type={"number"}
                    name="hourly rate"
                    label="Hourly Rate*"
                    InputLabelProps={{ shrink: true }}
                    placeholder="enter value..."
                    sx={{ width: "100%", my: "1rem" }}
                    value={job.hourly_rate}
                    onChange={(e) =>
                      setJob({ ...job, hourly_rate: e.target.value })
                    }
                  />
                </Grid>
              </Grid>
              {open.type === "edit" ? (
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Button variant="contained" onClick={updateHandler}>
                    Update
                  </Button>
                  <Button variant="outlined" onClick={handleClose}>
                    Cancel
                  </Button>
                </Box>
              ) : (
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Button variant="contained" onClick={createJobHandler}>
                    Create Job
                  </Button>
                  <Button variant="outlined" onClick={handleClose}>
                    Cancel
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        </Modal>
      </div>
    </Box>
  );
};

export default Datatable;
