import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import './header.css';
import UserProfile from '../UserProfile/UserProfile';

function Header(props) {
  return (
    <header>
<Logo />
<Search />
<UserProfile/>
</header>
  )
}

export default Header


