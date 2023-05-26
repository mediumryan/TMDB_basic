import { useNavigate } from 'react-router-dom';

const MainNav = () => {

  const navigate = useNavigate();

  return(
    <nav id='navbar'>
      <div className='nav__title'>
        <span>
          <i className="fa-solid fa-video"></i>
        </span>
        <span>Ryan Movie</span>
      </div>
      <ul className='nav__menu'>
        <li className='nav__menu-items' onClick={()=>{
          navigate('/')
        }}>홈</li>
        <li className='nav__menu-items' onClick={()=>{
          navigate('/nowplaying')
        }}>상영중</li>
        <li className='nav__menu-items' onClick={()=>{
          navigate('/popular')
        }}>인기영화</li>
        <li className='nav__menu-items' onClick={()=>{
          navigate('/top-rated')
        }}>평점순</li>
        <li className='nav__menu-items' onClick={()=>{
          navigate('/up-comming')
        }}>개봉예정</li>
      </ul>
    </nav>
  )
}

export default MainNav;