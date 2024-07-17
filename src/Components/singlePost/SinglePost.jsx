import './singlePost.css'
import img1 from '../img/2.jpg'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img className='singlePostImg' src={img1} />
        <h1 className='singlePostTitle'> 
          Hi, What a beautiful post this is!
          <div className='singlePostEdit'>
          <  BorderColorIcon className = 'singlePostIcon'/>
          <  DeleteIcon  className = 'singlePostIcon'/>
          </div>
        </h1>
        <div className='singlePostInfo'>
          
         <span className='singlePostAuthor'> Author : <b>M.Jumshaid</b></span>  
         <span className='singlePostDate'> 1 hour ago </span> 
        </div>
        <p className='singlePostDesc'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil accusantium soluta consectetur eligendi laboriosam laborum modi, id asperiores, ut fuga repellat earum iste quos. Veniam voluptatum explicabo odio tempore hic. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil accusantium soluta consectetur eligendi laboriosam laborum modi, id asperiores, ut fuga repellat earum iste quos. Veniam voluptatum explicabo odio tempore hic. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil accusantium soluta consectetur eligendi laboriosam laborum modi, id asperiores, ut fuga repellat earum iste quos. Veniam voluptatum explicabo odio tempore hic. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil accusantium soluta consectetur eligendi laboriosam laborum modi, id asperiores, ut fuga repellat earum iste quos. Veniam voluptatum explicabo odio tempore hic.</p>
      </div>
    </div>
  )
}
