import styles from "./NavBar.module.css";
import NavButton from "./NavButton";

const NavBar = props => (
  <div className={styles.NavBar}>
  
      {props.navButtons.map(button => (
        <NavButton
          key={button.path}
          path={button.path}
          label={button.label}
          icon={button.icon}
        />
      ))}
   
  </div>
  
);

export default NavBar;