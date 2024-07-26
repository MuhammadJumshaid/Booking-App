    import './searchItem.css'
    import img22 from '../img/22.jpg'
    function SearchItem() {
        return (
            <div className='searchItem'>
                <img src={img22} className='siImg' />
                <div className='siDesc'>
                    <h1 className='siTitle'>
                        Tower Streets Apartmemt
                    </h1>
                    <span className='siDistance'>
                        500m from center
                    </span>
                    <span className='siTaxiOp'>
                        Free         air port taxi
                    </span>
                    <span className='siSubTitle'>
                        Studio Apartmemt with air conditioning
                    </span>
                    <span className='siFeatures'>
                        Entire Studio * 1 bathroom , 21m3 one full bed
                    </span>
                    <span className='siCancelOp'>
                        Free Cancelation
                    </span>
                    <span className='siCancelOpSubtitle'>
                        You can cancel later. So lock in this great price today!
                    </span>
                </div>


                <div className='siDetails'>
                <div className='siRating'>
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className='siDetailTexts'>
                    <span className='siPrice'>$124</span>
                    <span className='siTaxOp'>Includes taxes and fees</span>
                    <button className='siCheckButton'>See Availability</button>
                </div>
                </div>

            </div>
        )
    }

    export default SearchItem
