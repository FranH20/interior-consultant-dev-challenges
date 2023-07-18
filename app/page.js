import Image from 'next/image'
import styles from './page.module.css'
import MainNavigation from '../components/MainContent'
import Information from '../components/Information'

export default function Home() {
  return (
    <>
      <main>
        <MainNavigation />
        <Information />
        <footer></footer>
      </main>
    </>
  )
}
