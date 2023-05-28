import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MainNavbar = styled.nav`
  position : sticky;
  top : 12px;
  background : radial-gradient(
    farthest-corner at 24px 24px,
  var(--primary-100),
  var(--primary-200)
  );
  color : var(--primary-300);
  display : flex;
  align-items : center;
  padding : 24px 48px;
  z-index : 999;
  border-radius: 12px;
  opacity : 0;
  &:hover {
    opacity : 1;
  }
  transition : 300ms opacity ease-in;
`

const MainNav = () => {

  const navigate = useNavigate();

  return(
    <MainNavbar>
      <div 
        className='nav__title'
        onClick={()=>{
          navigate('/')
        }}
        >
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
    </MainNavbar>
  )
}

export default MainNav;