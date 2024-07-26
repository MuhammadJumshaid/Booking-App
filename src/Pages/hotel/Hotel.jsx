import './hotel.css'
import MailList from '../../Components/mailList/MailList'
import Footer from '../../Components/footer/Footer'
import Navbar from '../../Components/navbar/Navbar'
import Header from '../../Components/header/Header'
import location from '../../Components/img/Location.png'
import img1 from '../../Components/img/1.jpg'
import img2 from '../../Components/img/2.jpg'
import img3 from '../../Components/img/3.jpg'
import img4 from '../../Components/img/4.jpg'
import img6 from '../../Components/img/6.jpg'
import img7 from '../../Components/img/7.jpg'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faArrowLeft, faCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'



const Hotel = ()=> {
  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)
  const photos = [
      {
      src : img1
      },
      {
      src : img2
      },
      {
      src : img3
      },
      {
      src : img4
      },
      {
      src : img6
      },
      {
      src : img7
      },  
]
const handleOpen=(i)=>{
  setSlideNumber(i)
  setOpen(true)
}

const handleMove =(direction)=>{
let newSlideNumber;
if(direction==="l"){
  newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1
}else{
  newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1

}
setSlideNumber(newSlideNumber)
}
  return (
    <div>
      <Navbar />
      <Header type= 'list' />
      <div className='hotelContainer'>
          {open && <div className='slider'> 
            {/* <FontAwesomeIcon icon="fa-solid fa-circle-xmark" className='close' /> */}

            <FontAwesomeIcon icon={ faCircleXmark} className='close' onClick={()=>setOpen(false)} />
            <FontAwesomeIcon icon={ faArrowLeft} className='arrow' onClick={()=>handleMove('l')} />
            <div className='sliderWrapper'>
              <img src={photos[slideNumber].src}  className='sliderImg'/>
            </div>
            <FontAwesomeIcon icon={ faArrowRight} className='arrow' onClick={()=>handleMove('r')} />
           
          
            
          </div>}
        <div className='hotelWrapper'>
        <button className='bookNow'>Reserve or Book now</button>
          <h1 className='hotelTitle'>Grand Hotel</h1>
          <div className='hotelAddress'>
            <img src={location} />
            <span>Mohalla Sherani wala Taunsa Sharif</span>

          </div>
          <span className='hotelDistance'>Excellent Location - 500m from center</span>
          <span className='hotelPriceHighlight'>
            Book a story over $120 at thi property and get a free airport taxi
          </span>
          <div className='hotelImages'>
          {photos.map((photo,i)=>(
            <div className='hotelImgWrapper'>
              <img onClick={()=>handleOpen(i)} alt='image' src={photo.src} className='HotelImg'/>
            </div>
          ))}
          </div>
          <div className='hotelDetails'>
            <div className='hotelDetailsTexts'>
              <h1 className='hotelTitle'>Stay in the center of Pakistan</h1>
              <p className='hotelDesc'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima odio eveniet nulla, reprehenderit quam iste dolorem praesentium eos? Animi rerum ipsa, et eveniet, temporibus pariatur quibusdam sed tempora distinctio ullam totam harum deserunt tempore sit, quo id corporis vero repellendus impedit blanditiis? Fugiat consequatur id odio distinctio expedita magni voluptatibus eaque sequi placeat, amet, voluptate voluptates quasi! Perspiciatis eius assumenda, deleniti atque sit est necessitatibus ipsam asperiores delectus, quis consequuntur velit minima perferendis ipsa quas rerum, nostrum culpa dolorum. quis consequuntur velit minima perferendis ipsa quas rerum, nostrum culpa dolorum. 


              </p>
            </div>
            <div className='hotelDetailsPrice'>
              <h1>Perfact for a 9-night stay</h1>
              <span>Located in the real heart of pakistan. The property has an Excellent location score of 9.8  </span>
                <h2>
                <b> $890</b> (9-nights)
                </h2>
                <button>Reserve or Book now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}
export default Hotel;