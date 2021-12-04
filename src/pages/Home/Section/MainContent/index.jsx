import playCircleImg from '../../../../assets/play-circle.svg';
import shadowImg from '../../../../assets/shadow.svg';

import { fetchContent } from '../../../../queries/fetchContent';

import styles from '../styles.module.scss';

const resource = fetchContent(3000);

export function MainContent() {
  const content = resource.read();

  return (
    <>
      <p>{content}</p>
      <h1>Create the Next Gen<br/>Video Resume</h1>
      <img src={shadowImg} alt="shadow" />
      <span>Get hired quickly by giving your resume the<br/> video look it deserves.</span>
      
      <div className={styles.productButtonsContainer}>
        <button type="button">Get Started</button>
        <button type="button">
          <img src={playCircleImg} alt="Watch Demo" /> Watch Demo
        </button>
      </div>
    </>
  );
}