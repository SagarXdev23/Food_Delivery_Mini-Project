import React, { useState }  from 'react'
import "./Home.css"
import Header from '../../components/navbar/Header/Header'
import ExploreMenu from '../../components/navbar/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/navbar/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/navbar/AppDownload/AppDownload'


const Home = () => {

  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu  category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}  />
      <AppDownload />
      
    </div>
  )
}

export default Home










// import React, { useState } from 'react'
// import "./Home.css"
// import Header from '../../components/navbar/Header/Header'
// import ExploreMenu from '../../components/navbar/ExploreMenu/ExploreMenu'
// import FoodDisplay from '../../components/navbar/FoodDisplay/FoodDisplay'
// import AppDownload from '../../components/navbar/AppDownload/AppDownload'

// const Home = () => {
//   const [category, setCategory] = useState("All");

//   return (
//     <div>
//       <Header/>
//       <ExploreMenu category={category} setCategory={setCategory} />
//       <FoodDisplay category={category} />
//       <AppDownload />
//     </div>
//   )
// }

// export default Home




