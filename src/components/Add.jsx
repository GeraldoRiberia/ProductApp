import React, { useState } from 'react'
import { TextField, Grid , Typography, Box, Button} from '@mui/material'
const Add = () => {
    var[inventory, setInventory] = useState({name:"", image :"", price : "", category : ""})
    const inventoryInput = (data)=>{
        console.log(data)
        setInventory({...inventory,[data.target.name]:data.target.value})
      }
    const submit = ()=>{
        console.log(inventory);
    }
  return (
    <div style={{marginTop:'5%'}}>
    <Typography style={{color:"dimgray"}} align='center'  variant='h2'>
        <Box component="span" fontWeight='fontWeightMedium'>Add Product</Box>
    </Typography>
    <Grid style={{marginTop:'25px'}} justifyContent={'center'} container spacing={1}>
        <Grid>
            <TextField required variant='outlined' label='Product Name'
            onChange={inventoryInput} name ='name' value = {(inventory.prodName)}/> <br /> <br />
            <TextField required variant='outlined' label='Image Link'
            onChange={inventoryInput} name='image' value = {(inventory.prodImage)}/> <br/> <br/>
            <TextField required variant='outlined' label='Price'
            onChange={inventoryInput} name='price' value = {(inventory.prodPrice)}/><br/><br/>
            <TextField required variant='outlined' label='Product Category'
            onChange={inventoryInput} name='category' value = {(inventory.prodCat)}/> <br/><br/>
            <Button style={{marginTop:'10%'} } fullWidth id ='submitButton' variant="contained" onClick={submit}>Submit</Button>
        </Grid>
    </Grid>
        
    </div>
  )
}

export default Add