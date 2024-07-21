import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Grid,Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material'
const Home = () => {
    var[inventory, setInventory] = useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((request)=>{
            console.log(request)
            setInventory(request.data)
        }).catch((error)=>{
            console.log(error)
        })
    },[])
    return (
    <div>
        <Grid style={{paddingTop:'10px'}} container spacing={1}>
            {inventory.map((data)=>{
            return(
                <Grid key={data.id} item xs={8} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={data.image}
                    title={data.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {data.title}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                    $ {data.price}
                    </Typography>
                    <Typography style={{color: 'rgb(74, 73, 73)'}} gutterBottom variant="h7" component="div">
                    {data.category}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
                </Card>
                </Grid>
            )
            })}
        </Grid>
    </div>
  )
}

export default Home