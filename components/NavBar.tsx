import NavStyles from 'components/NavBar.module.css';
import NavButton from "./NavButton";
import { useState } from 'react';
import { clsx } from 'clsx';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = props => {
 
const [collapse, setCollapse] = useState(true)


return (
  <div>

<FontAwesomeIcon icon={faBars} 
  onClick={()=>{{setCollapse(!collapse)}}} 
  className={NavStyles.icon}/>

  <div  className={clsx({
        [NavStyles.visible]: !collapse,
        [NavStyles.collapsed]: collapse
      })}>
  
  {props.navButtons.map(button => (
    <NavButton
      key={button.path}
      path={button.path}
      label={button.label}
      icon={button.icon}
    />
  ))}

  </div>

  
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