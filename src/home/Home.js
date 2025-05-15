import Section1 from '../Components/homecomponents/Section1'
import Section2 from '../Components/homecomponents/Section2'
import Styles from '../Styles/home.module.css'

function Home() {
  return (
    <>
    {/* <div className={Styles.for_spacing}></div> */}
   <Section1/>
   <div className={Styles.for_spacing}></div>
    <Section2/>
   <div className={Styles.for_spacing}></div>

    </>
  )
}

export default Home
