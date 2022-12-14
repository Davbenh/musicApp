import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import './header.css';
import UserProfile from '../UserProfile/UserProfile';

function Header(props) {
  return (
 <header className='header'>
<Logo />
<Search searchUpdate={props.searchUpdate} />
<UserProfile/>
</header>
  )
}

export default Header


