import { Box, Toolbar } from "@mui/material";
import { Navbar, SideBar } from "../components";

const drawerWidth = 240;

// Cualquier otra pantalla o pagina va a poder utilizar el mismo diseño y heredar todo lo de journalLayout
export const JournalLayout = ({ children }) => {
  return (
    <Box
      sx={{ display: "flex" }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      {/* Navbar  drawerWidth*/}
      <Navbar drawerWidth={drawerWidth} />

      {/* Sidebar  drawerWidth*/}
      <SideBar drawerWidth={drawerWidth} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Toolbar */}
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
};
