import './featured.css'
import img7 from '../img/7.jpg'
import img4 from '../img/4.jpg'
import img9 from '../img/9.jpg'
import { height, width } from '@fortawesome/free-brands-svg-icons/fa42Group'
export default function Featured() {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <img  src= {img7  } />
        <div className='featuredTitle'>
            <h1>Jimi</h1>
            <h2>123 properties</h2>
        </div>
        
      </div>
      <div className='featuredItem'>
        <img  src= {img4} />
        <div className='featuredTitle'>
            <h1>Jumshaid</h1>
            <h2>1222 properties</h2>
        </div>
        
      </div>
      <div className='featuredItem'>
        <img   src= {img9} />
        <div className='featuredTitle'>
            <h1>Kamran</h1>
            <h2>235  properties</h2>
        </div>
        
      </div>
    </div>
  )
}
