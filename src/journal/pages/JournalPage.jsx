import { useDispatch } from "react-redux";
import { IconButton, Typography } from "@mui/material";
import { AddOutlined, MailOutline } from "@mui/icons-material";

import { NoteView } from "../views";
import { ImageGallery } from "../components";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../views/NothingSelectedView";
import { startNewNote } from "../../store/journal/thunks";

export const JournalPage = () => {
  const dispatch = useDispatch();

  const onclickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      {/* <NoteView /> */}
      <NothingSelectedView />
      <ImageGallery />

      <IconButton
        onClick={onclickNewNote}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
