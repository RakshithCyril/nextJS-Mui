import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button, ImageList } from '@mui/material';
import Grid from '@mui/material/Grid';
import axios from 'axios'


export default class InputWithIcon extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      file:null
    }
    this.handleFile = this.handleFile.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleFile(e){
    const uploadImage = e.target.files[0]
    this.setState({file:uploadImage})
    
  }
     handleSubmit(e) {
      e.preventDefault();
      const name = e.target[1].value;
        const image = this.state.file
        const formData = new FormData()
        formData.append('name',name)
        formData.append('testImage',image)
        
        axios({
          url:'http://localhost:8080/upload',
          method: 'post',
          data: formData,
          headers: { "Content-Type": 'application/x-www-form-urlencoded' },
        })
        .then(dat=>{
          console.log('success')
        }).catch(err=>{
          console.log('err')
        })
        
    }
    render(){
      return (
        <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
    >
        <Box sx={{ '& > :not(style)': { m: 1 }, }}>
            <form onSubmit={this.handleSubmit} >
            
            <TextField  
            id="input-with-icon-textfield"
            label="TextField"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <Box sx={{display: 'block', mt:5}}>
    
          <FormControl sx={{display: 'block' }}  variant="standard">
          <input
      accept="image/*"
      style={{ display: 'none' }}
      id="raised-button-file"
      multiple
      type="file"
      onChange={this.handleFile}
    />
    <label htmlFor="raised-button-file">
      <Button variant="contained" component="span" >
        Upload
      </Button>
    </label> 
          </FormControl>
          </Box>
          <Button sx={{mt:5}} type="submit" variant="outlined">Outlined</Button>
          </form>
        </Box>
        </Grid>
    
      );
    }
 
}
