import './featuredProperty.css'
import House from '../img/House.png'

const FeaturedProperty = () => {
    return (
        <div className='fp'>
            <div className='fpItem'>
                <img className='fpImg' src={House} />
                <span className='fpName'>Muree Hotel Pakistan</span>
                <span className='fpCity'>Muree</span>
                <span className='fpPrice'>Starting from  $120</span>
                <div className='fpRating'>
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className='fpItem'>
                <img className='fpImg' src={House} />
                <span className='fpName'>Muree Hotel Pakistan</span>
                <span className='fpCity'>Muree</span>
                <span className='fpPrice'>Starting from  $120</span>
                <div className='fpRating'>
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className='fpItem'>
                <img className='fpImg' src={House} />
                <span className='fpName'>Muree Hotel Pakistan</span>
                <span className='fpCity'>Muree</span>
                <span className='fpPrice'>Starting from  $120</span>
                <div className='fpRating'>
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className='fpItem'>
                <img className='fpImg' src={House} />
                <span className='fpName'>Muree Hotel Pakistan</span>
                <span className='fpCity'>Muree</span>
                <span className='fpPrice'>Starting from  $120</span>
                <div className='fpRating'>
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperty
