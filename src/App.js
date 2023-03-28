import JobWizard from "./pages/JobWizard";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { themeStyles } from "./theme";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Datatable from "./pages/Datatable";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";

function App() {
  const theme = createTheme(themeStyles);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/wizard" element={<JobWizard />} />
            <Route path="/data-table" element={<Datatable />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
