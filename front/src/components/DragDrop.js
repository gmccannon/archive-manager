import React, { useState } from "react";

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

function DragDrop() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleReset = () => {
    setFile(null);
  };

  return (
    <form action="/uploader" method="post" encType="multipart/form-data">
      <Button component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUploadIcon />}>
        Select A File
        <VisuallyHiddenInput onChange={handleFileChange} name="file" type="file" />
      </Button>
      <Typography variant="body1" sx={{ mt: 2 }}>
        {file ? `Selected File: ${file.name}` : 'No file selected'}
      </Typography>
      <Stack direction="row" spacing={2}>
      <Button type="sumbit" variant="contained" disabled={!file} endIcon={<SendIcon />}>
        Upload File
      </Button>
      <Button onClick={handleReset} type="reset" variant="outlined" startIcon={<DeleteIcon />}>
        Delete File
      </Button>
    </Stack>
    </form>
  );
}

export default DragDrop;
