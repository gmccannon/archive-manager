import React, { useState } from "react";
import { useDropzone } from 'react-dropzone';
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

const Dropzone = styled('div')(({ theme }) => ({
  border: '.3vh dashed gray',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  height: '55vh',
  backgroundColor: '#f7f7f7',
  color: 'gray',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  textAlign: 'center',
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
}));

function Repair() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleReset = () => {
    setFile(null);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/repair', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = file.name + '.zip';
        document.body.appendChild(a);
        a.click();
        a.remove();
      } else {
        alert('File upload failed.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('An error occurred while uploading the file.');
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setFile(acceptedFiles[0]);
      }
    },
    noClick: true,
    noKeyboard: true,
  });

  return (
    <div style={{ width: '60%', height: '100%', margin: 'auto', textAlign: 'center' }}>
      <Dropzone {...getRootProps()}>
        <input {...getInputProps()} />
        <Button
          sx={{ backgroundColor: 'rgb(38, 91, 172)', '&:hover': { backgroundColor: 'rgb(38, 91, 172)' } }}
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Select A File
          <VisuallyHiddenInput onChange={handleFileChange} name="file" type="file" />
        </Button>
        <Typography variant="body1" style={{ marginTop: '1vh' }}>
          {file ? `${file.name}` : 'Or drop a file here'}
        </Typography>
      </Dropzone>
      <Stack direction="row" spacing={2} sx={{ mt: 2, justifyContent: 'center' }}>
        <Button
          sx={{ backgroundColor: 'rgb(38, 91, 172)', '&:hover': { backgroundColor: 'rgb(38, 91, 172)' } }}
          onClick={handleUpload}
          variant="contained"
          disabled={!file}
          endIcon={<SendIcon />}
        >
          Upload File
        </Button>
        <Button
          sx={{
            color: 'rgb(38, 91, 172)',
            borderColor: 'rgb(38, 91, 172)', // Fix border color
            '&:hover': {
              color: 'rgb(38, 91, 172)', // Match hover text color
              borderColor: 'rgb(38, 91, 172)', // Match hover border color
            },
          }}
          onClick={handleReset}
          variant="outlined"
          startIcon={<DeleteIcon />}
        >
          Remove File
        </Button>
      </Stack>
    </div>
  );
}

export default Repair;
