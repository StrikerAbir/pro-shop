import LazyLoad from "react-lazy-load"
import Categories from "../all_structure/components/categories/categories"
import Slider from "../all_structure/components/slider"



function Home() {
  return (
    <div>
      <Slider/>
      <Categories/>
      
    </div>
  )
}

export default Home