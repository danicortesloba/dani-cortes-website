import NavStyles from 'components/NavBar.module.css';
import NavButton from "./NavButton";
import { useState } from 'react';
import { clsx } from 'clsx';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = props => {
 

  const [collapse, setCollapse] = useState(true)

return (
  <div>
  <div className={NavStyles.Hamburger}>
  
  {props.navButtons.map(button => (
    <NavButton
      key={button.path}
      path={button.path}
      label={button.label}
      icon={button.icon}
      className={clsx({
        [NavStyles.responsive]: !collapse,
        [NavStyles.Hamburger]: collapse
      })}
      id="hamburger"
    />
  ))}

  </div>
  <FontAwesomeIcon icon={faHamburger} 
  onClick={()=>{{setCollapse(!collapse)}{print()}}} 
  className={NavStyles.icon}/>
  
  <div className={NavStyles.Menu}>
  
      {props.navButtons.map(button => (
        <NavButton
          key={button.path}
          path={button.path}
          label={button.label}
          icon={button.icon}
        />
      ))}
  
  </div>
</div>
)
 
}

export default NavBar;