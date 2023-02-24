import styles from './ButtonLink.module.css';

function ButtonLink(props) {
  return (
    <a href={props.href} role="button" className={styles.buttonLink}>
      {props.children}
    </a>
  );
}

export default ButtonLink;
