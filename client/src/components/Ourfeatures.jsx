import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/joy/Box';
import CardActionArea from '@mui/material/CardActionArea';

const Ourfeatures = () => {
    const features = [{
        id:1,
        title:"Serving with love",
        description : "Aenean suscipit vehicula purus quis iaculis. Aliquam nec leo nisi. Nam urna arcu, maximus eget ex nec, consequat pellentesque enim. Aliquam tempor fringilla odio, vel ullamcorper turpis varius eu."
    },{
        id:2,
        title:"Serving with love",
        description : "Aenean suscipit vehicula purus quis iaculis. Aliquam nec leo nisi. Nam urna arcu, maximus eget ex nec, consequat pellentesque enim. Aliquam tempor fringilla odio, vel ullamcorper turpis varius eu."
    },{
        id:3,
        title:"Serving with love",
        description : "Aenean suscipit vehicula purus quis iaculis. Aliquam nec leo nisi. Nam urna arcu, maximus eget ex nec, consequat pellentesque enim. Aliquam tempor fringilla odio, vel ullamcorper turpis varius eu."
    }]
  return (
    <Box sx={{ textAlign: 'center', my: 4 }}>
  <Typography variant="h3" gutterBottom >
    Our Features
  </Typography>
  
  <Grid 
    container 
    spacing={4} 
    justifyContent="center"  // Centers horizontally
    sx={{ px: 2 }}          // Optional: Add padding on sides
  >
    {features.map((feature, index) => (
      <Grid 
        item 
        key={index} 
        xs={12} 
        sm={6} 
        md={4} 
        sx={{ display: 'flex', justifyContent: 'center' }}  // Centers each card
      >
        <Card sx={{ maxWidth: 360, width: '100%', minHeight:400 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image="/images/backrest.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {feature.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize:"1.2rem" }}>
                {feature.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>
  )
}

export default Ourfeatures