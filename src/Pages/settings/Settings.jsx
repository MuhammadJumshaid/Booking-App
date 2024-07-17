import Sidebar from '../../Components/Sidbar/Sidebar'
import './settings.css'
import img6 from '../../Components/img/7.jpg'
import PersonAddIcon from '@mui/icons-material/PersonAdd';


export default function Settings() {
  return (
    <div className='settings'>
    <div className='settinigsWrapper'>
        <div className='settingsTitle '>
            <span className='settingsUpdateTitle'>Updade Your Accout</span>
            <span className='settingsDeleteTitle'>Delete Accout</span>
        </div> 
        <form className='settingsForm'>
            <label>Profile Picture</label>
            <div className='settingsPP'>
            <img src={img6} />
            <label htmlFor='fileInput' >
                <PersonAddIcon className='settingsPPIcon' />
            </label>
            <input type='file' id='fileInput' style={{display:'none'}}></input>
            </div>
           
                <label>UserName</label>
                <input type='text' placeholder='Jimi'></input>
                <label>Email</label>
                <input type='email' placeholder='jimi@gmail.com'></input>
                <label>Password</label>
                <input type='password' ></input>
                <button className='settingsSubmit'>Update</button>
            
        </form>
    </div>
      <Sidebar />
    </div>
  )
}
