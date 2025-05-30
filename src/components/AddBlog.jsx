import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const AddBlog = () => {
  return (
    <div>
    

      <br />
      <Typography variant="h5">
        Enter the details of the Blog to be added:
        </Typography>
      
      <TextField
      variant = "outlined"
      label = "Blog Name">
      </TextField> <br /><br />

      <TextField
      variant = "outlined"
      label = "Description">
      </TextField> <br /><br />

      <TextField
      variant = "outlined"
      label = "Author Name">
      </TextField> <br /><br />

    <Button
        variant="contained"
        sx={{
        backgroundColor: '#4CAF50',
        color: '#ffffff',
        '&:hover': {
        backgroundColor: '#388E3C',
        },
        }}
    >
    Submit Blog
    </Button>
    </div>
  )
}

export default AddBlog
