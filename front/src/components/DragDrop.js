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

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/uploader', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Handle the response, which may include the file or other data
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'generated_pdf.pdf'; // Adjust filename if needed
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

  return (
    <div>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Select A File
        <VisuallyHiddenInput onChange={handleFileChange} name="file" type="file" />
      </Button>
      <Typography variant="body1" sx={{ mt: 2 }}>
        {file ? `Selected File: ${file.name}` : 'No file selected'}
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        <Button
          onClick={handleUpload}
          variant="contained"
          disabled={!file}
          endIcon={<SendIcon />}
        >
          Upload File
        </Button>
        <Button
          onClick={handleReset}
          type="button"
          variant="outlined"
          startIcon={<DeleteIcon />}
        >
          Delete File
        </Button>
      </Stack>
    </div>
  );
}

export default DragDrop;
