import FoodBankIcon from '@mui/icons-material/FoodBank';
const Speciality = () => {
  const specialities = [{
    id:1,
    title:"Fast Food",
    description:"This is one of the best fast food restaurants in kashmir valley"
  },{
    id:1,
    title:"Fast Food",
    description:"This is one of the best fast food restaurants in kashmir valley"
  },{
    id:1,
    title:"Fast Food",
    description:"This is one of the best fast food restaurants in kashmir valley"
  }]
  return (
    <div className="specialities">
      {specialities?.map(speciality=>{
        return <div className="speciality"><h2><FoodBankIcon/>{speciality.title}</h2> {speciality.description} </div>
      })}
    </div>
  )
}

export default Speciality