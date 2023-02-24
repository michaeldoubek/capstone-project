import styles from './TestimonialCard.module.css';
import { ReactComponent as Star } from '../assets/star.svg';

function TestimonialCard(props) {
  return (
    <article className={styles.testimonialCard}>
      <figure>
        <img src={props.avatar} alt={`${props.name}'s avatar`} />
        <figcaption>{props.name}</figcaption>
      </figure>
      <em>{repeatJsx(<Star width={24} height={24} />, props.rating)}</em>

      <blockquote cite="https://maps.google.com">{props.review}</blockquote>
    </article>
  );
}

const repeatJsx = (jsx, times) => {
  const jsxArray = [];
  for (let i = 0; i < times; i++) {
    jsxArray.push(jsx);
  }
  return jsxArray;
};

export default TestimonialCard;
