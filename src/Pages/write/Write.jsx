import './write.css'
import img3 from  '../../Components/img/3.jpg'
import AddIcon from '@mui/icons-material/Add';
export default function Write() {
  return (
    <div className='write'>
  
      <img className='writeImg' src={img3} />
    
     <form className='writeForm'>
        <div className='writeFormGroup'>
            <label htmlFor='fileInput'>
            < AddIcon className='writeIcon' />
             </label>
            <input type='file' id='fileInput' style={{display: 'none'}} />
            <input type='text' placeholder='Title' className='writeInput' autoFocus = {true}/>
        </div>
        <div className='writeFormGroup'>
            <textarea
             type = 'text'
             placeholder='tell your story'
             className='writeInput writeText'> </textarea>
        </div>
        <button className='writeSubmit'>Publish</button>
     </form>  
     
    </div>
  )
}
