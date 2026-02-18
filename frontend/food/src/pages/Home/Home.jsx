import React from 'react'
import "./Home.css"
import Header from '../../components/navbar/Header/Header'
import ExploreMenu from '../../components/navbar/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/navbar/FoodDisplay/FoodDisplay'


const Home = () => {

  // const [category, setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu />
      {/* <FoodDisplay/> */}
      {/* <ExploreMenu  category={category} setCategory={setCategory}/> */}
      {/* <FoodDisplay category={category} /> */}
    </div>
  )
}

export default Home