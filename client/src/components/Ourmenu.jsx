import Button from '@mui/joy/Button'

const Ourmenu = () => {
    const menu = ["STARTERS","MAIN COURSES","SOUPS","DESSERTS"]
  return (
    <div className='ourmenu'>
        <div>
        <span>Discover</span>
        <a href="/">Our Menu</a>
        <p>Explore texture, color and of course the ultimate tastes with our menu of the season. All the ingredients are fresh and carefully selected by our chefs. Enjoy an extraordinary dinning experience.</p>
        </div>
        
        
        <Button variant='outlined'>VIEW MENU</Button>
    </div>
  )
}

export default Ourmenu