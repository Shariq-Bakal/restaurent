
import Filter from '../components/Filter'
import Layout from '../components/Layout'
import Menu from '../components/Menu'

const Menupage = () => {
  return (
    <Layout>
      
      <div className='main-menu-container'>
        <Filter/>
        <Menu/>
      </div>
  </Layout>
    
  )
}

export default Menupage