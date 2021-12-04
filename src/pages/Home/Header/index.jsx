import youtubeImg from '../../../assets/youtube.svg';
import { fetchUser } from '../../../queries/fetchUser';

import styles from './styles.module.scss';

const resource = fetchUser(4000);

export function Header() {
  const username = resource.read();
  
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img src={youtubeImg} alt="youtube logo" />
        <h1>Visume</h1>
      </div>
      
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        maxWidth: 842, 
        width: '100%' 
      }}>
        <nav>
          <a href="#">About</a>
          <a href="#">Pricing</a>
          <a href="#">Testimonials</a>
          <a href="#">Contact</a>
        </nav>

        <div className={styles.buttonsContainer}>
          {/* <button type="button">Sign in</button>
          <button type="button">Sign up</button> */}
          <p>Olá, <b>{username}</b>!</p>
        </div>
      </div>
    </header>
  )
}