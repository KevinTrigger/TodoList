import cl from './Header.module.css';
import logo from '../../images/logo.png';

const Header = () => {
  return (
    <header className={cl.header}>
      <div className={cl.header__container}>
        <div className={cl.header__wrap}>
            <img src={logo} alt="sad" className={cl.logo}/>
        </div>
      </div>
    </header>
  )
}


export default Header;