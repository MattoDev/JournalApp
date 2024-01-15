import { Grid, Typography } from "@mui/material";

// Es otro funtional component
export const AuthLayout = ({ children, title = "" }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      {/* Esta parte es para poner la caja en medio */}
      {/* xs tamaño de las pantallas investigar */}
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{
          width: { md: 450 },
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>

        {/* En este espacio va el children Childre  */}
        {children}
      </Grid>
    </Grid>
  );
};
