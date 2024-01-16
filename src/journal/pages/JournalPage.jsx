import { MailOutline } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../views/NothingSelectedView";
import { NoteView } from "../views";
import { ImageGallery } from "../components";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y
        archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
        las industrias desde el año 1500, cuando un impresor (N. del T. persona
        que se dedica a la imprenta) desconocido usó una galería de textos y los
        mezcló de tal manera que logró hacer un libro de textos especimen. No
        sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno
        en documentos electrónicos, quedando esencialmente igual al original.
        Fue popularizado en los 60s con la creación de las hojas "Letraset", la
      </Typography> */}

      {/* <NothingSelectedView /> */}
      <NoteView />
      <ImageGallery />
    </JournalLayout>
  );
};
