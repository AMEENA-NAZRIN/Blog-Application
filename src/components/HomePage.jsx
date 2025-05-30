import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'

const HomePage = () => {
    var [blog,useBlog] = useState([]);
    useEffect(() => {
            axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                console.log(res.data);
                useBlog(res.data);
            })
            .catch((err) => console.log(err));
        }, [])
  return (
    <div>
      <Grid container spacing ={3}>
        {
            blog.map((val,i) =>
            {
                return(
                    <Grid size= {{xs:12, sm:4, md:2}} >
                        <Card sx={{ maxWidth: 350, color: "ThreeDDarkShadow" }}>
                            <CardMedia
                            sx={{ height: 100 }}
                            id={val.id}
                            title={val.title}
                            />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {val.id}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "darkseagreen" }}>
                         {val.body}
                        </Typography>
                        </CardContent>
                        
                        </Card>
                    </Grid>
                )
            })
        }
      
      </Grid>
    </div>
  )
}

export default HomePage
