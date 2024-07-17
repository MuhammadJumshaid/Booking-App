import './sidebar.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img className='sidebarImg' src='https://images.unsplash.com/photo-1545642412-2fb9732aac99?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci molestiae eveniet asperiores </p>
      </div>
      <div className='sidebarItem'>
      <span className='sidebarTitle'>CATEGORIES</span>
      <ul className='sidebarList'>
        <li className='sidebarListItem'>LIFE</li>
        <li className='sidebarListItem'>MUSIC</li>
        <li className='sidebarListItem'>STYLE</li>
        <li className='sidebarListItem'>SPORT</li>
        <li className='sidebarListItem'>TECH </li>
        <li className='sidebarListItem'>CINEMA</li>
      </ul>
      </div>
      <div className='sidebarItem'>
      <span className='sidebarTitle'>FOLLOW US</span>
      <div className='socialContainer'>
      <FacebookIcon className= 'sidebarIcon' />
      <TwitterIcon className='sidebarIcon'/>
      <PinterestIcon className= 'sidebarIcon' />
      <InstagramIcon className='sidebarIcon' />
      </div>
      </div>
    </div>
  )
}
