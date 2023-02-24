import styles from './ButtonLink.module.css';
import { Link } from 'react-router-dom';

function ButtonLink(props) {
  return (
    <Link to={props.href} role="button" className={styles.buttonLink}>
      {props.children}
    </Link>
  );
}

export default ButtonLink;
