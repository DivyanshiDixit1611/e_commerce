import BestSeller from '../component/BestSeller.jsx'
import Hero from '../component/Hero'
import {LatestCollection} from '../component/LatestCollection.jsx'
import Newsletter from '../component/Newsletter.jsx'
import OurPolicy from '../component/OurPolicy.jsx'
function Home() {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <Newsletter/>
     </div>
  )
}

export default Home
