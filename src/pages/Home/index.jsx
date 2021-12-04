import { Suspense } from 'react';

import styles from './styles.module.scss';
import { Section } from './Section';
import { Header } from './Header';

export function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Suspense fallback={<p>Carregando...</p>}>
          <Header/>
        </Suspense>

        <Section/>
      </div>
    </div>
  )
}