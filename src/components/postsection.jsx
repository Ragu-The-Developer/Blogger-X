import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Img1 from '../card-images/card-img.jpg';
import Img2 from '../card-images/stock-img.jpg';
import Img3 from '../card-images/bike-img.jpg';
import Img4 from '../card-images/business-img.jpg';
import Img5 from '../card-images/workout-img.jpg';
import Img6 from '../card-images/tourist-img.jpg';
export default function PostSection() {
  return (
    <div className='post-container'>

    <h2 className='post-header'>Trending Posts</h2>

    
    <div className='box-1'>
    <Card sx={{ maxWidth: 345 }} className='card'>
      <CardMedia
        sx={{ height: 140 }}
        image= { Img1 }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Top IT Jobs For 2024
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Develop The Skills To Land Your Dream Job In Dream Company
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>


    <Card sx={{ maxWidth: 345 }} className='card'>
      <CardMedia
        sx={{ height: 140 }}
        image= { Img2 }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Top Stocks To Buy in 2024
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Try Out The Stocks In Energy and Food Sector For 200X Growth...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>


    <Card sx={{ maxWidth: 345 }} className='card'>
      <CardMedia
        sx={{ height: 140 }}
        image= { Img3 }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Top 10 Bikes to Buy in 2024
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Find Out Which Bikes Suites to your Budget With Zero Downtown Payment...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
    </div>



    <div className='box-2'>
    <Card sx={{ maxWidth: 345 }} className='card'>
      <CardMedia
        sx={{ height: 140 }}
        image= { Img4 }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          10x Growth Business Ideas 2024
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Turn Your Free Time Into Side Hustle Using Business Modules
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
   

    <Card sx={{ maxWidth: 345 }} className='card'>
      <CardMedia
        sx={{ height: 140 }}
        image= { Img5 }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Simple Home Workouts in 2024
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Best Home Workouts For Your Belly Loss.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
   

    <Card sx={{ maxWidth: 345 }} className='card'>
      <CardMedia
        sx={{ height: 140 }}
        image= { Img6 }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Best Tourist Places In 2024
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Enjoy the Vacation with your Loved Ones in the Best Spots.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
   
    </div>
    </div>
  )
}
