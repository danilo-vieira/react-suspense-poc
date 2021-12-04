import { Suspense } from 'react';

import heroImg from '../../../assets/hero.png';
import { MainContent } from './MainContent';

import styles from './styles.module.scss';

export function Section() {

  return (
    <section className={styles.section}>
      <main className={styles.info}>
        <Suspense fallback={<h1>Carregando...</h1>}>
          <MainContent/>
        </Suspense>
      </main>
      <img src={heroImg} alt="Hero image" />
    </section>
  )
}