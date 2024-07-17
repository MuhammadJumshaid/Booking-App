import './post.css'
import img1 from '../img/2.jpg'
export default function Post() {
  return (
    <>
    <div className='post'>
      <img 
      className='postImg'
             src={img1}/>
    
    <div className='postInfo'>
    <div className='postCats'>
    <span className='postCat'>Life</span>
    <span className='postCat'>Music</span>
    </div>
    <span className='postTitle'>
        Hi, How are you Jimi!
    </span>

    <hr/>
    <span className='postDate'>1 hour ago</span>
    </div>
    <p className='postDesc'>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis cum, assumenda, aperiam rerum magni fuga nobis ab deleniti aut asperiores minus, ullam magnam voluptas provident iste facere exercitationem quae. Dicta!
    {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis cum, assumenda, aperiam rerum magni fuga nobis ab deleniti aut asperiores minus, ullam magnam voluptas provident iste facere exercitationem quae. Dicta!
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis cum, assumenda, aperiam rerum magni fuga nobis ab deleniti aut asperiores minus, ullam magnam voluptas provident iste facere exercitationem quae. Dicta! */}
    </p>
    </div>

    </>
  )
}
