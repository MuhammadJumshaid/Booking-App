import './propertyList.css'
import img11 from '../img/11.jpg'
import img12 from '../img/12.jpg'
import img13 from '../img/13.jpg'
import img14 from '../img/14.jpg'
import img16 from '../img/16.jpg'

const PropertyList = () => {
    return (
        <div className='pList'>
            <div className='pListItem'>
                <img src={img11} />
                <div className='pListTitles'>
                    <h1>hotels</h1>
                    <h2>134 hotels</h2>
                </div>
            </div>
            <div className='pListItem'>
                <img src={img12} />
                <div className='pListTitles'>
                    <h1>hotels</h1>
                    <h2>134 hotels</h2>
                </div>
            </div>
            <div className='pListItem'>
                <img src={img13} />
                <div className='pListTitles'>
                    <h1>hotels</h1>
                    <h2>134 hotels</h2>
                </div>
            </div>
            <div className='pListItem'>
                <img src={img14} />
                <div className='pListTitles'>
                    <h1>hotels</h1>
                    <h2>134 hotels</h2>
                </div>
            </div>
            <div className='pListItem'>
                <img src={img16} />
                <div className='pListTitles'>
                    <h1>hotels</h1>
                    <h2>134 hotels</h2>
                </div>
            </div>
        </div>
    )
}

export default PropertyList
