import { Box } from "@mui/material";
import { Navbar } from "../components";

const drawerWidth = 240;

// Cualquier otra pantalla o pagina va a poder utilizar el mismo diseño y heredar todo lo de journalLayout
export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Navbar  drawerWidth*/}
      <Navbar drawerWidth={drawerWidth} />

      {/* Sidebar  drawerWidth*/}

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Toolbar */}

        {children}
      </Box>
    </Box>
  );
};
