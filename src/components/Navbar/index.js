import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickToggleTheme = () => {
        toggleTheme()
      }

      const navTextTheme = isDarkTheme ? 'dark-text' : 'light-text'

      const navBarBgClass = isDarkTheme ? 'dark-nav-theme' : 'light-nav-theme'

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <div className={`navbar ${navBarBgClass}`}>
          <div className="nav-content">
            <img
              className="website-logo"
              src={websiteLogo}
              alt="website logo"
            />
            <ul className="nav-menu">
              <li className="nav-menu-item">
                <Link to="/" className={`nav-link ${navTextTheme}`}>
                  Home
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link to="/about" className={`nav-link ${navTextTheme}`}>
                  About
                </Link>
              </li>
            </ul>
            <button
              testid="theme"
              type="button"
              className="theme-button"
              onClick={onClickToggleTheme}
            >
              <img src={themeImgUrl} alt="theme" className="theme-image" />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
