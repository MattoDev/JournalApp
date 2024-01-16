import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";

//Un Box es como un Div, Investigar un poco
//Un Grid me permite definir elementos internamente
export const NoteView = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          16 de Enero, 2024
        </Typography>
      </Grid>

      <Grid item>
        <Button color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un tittulo"
          label="Titulo"
          sx={{ border: "none", mb: 1 }}
        />
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Que sucedio el en dia de hoy?"
          minRows={5}
        />
      </Grid>

      {/* Image Galelry */}
    </Grid>
  );
};
