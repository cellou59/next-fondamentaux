import Link from 'next/link'
import styles from './page.module.css'
const Page = () => {
  return (
    <div>
      <p className={styles.title}>Je suis un développeur</p>
      <p className="title">FullStack Next</p>
      <div className="mt-4">
        <Link
          className="rounded border border-gray-400 bg-white px-4 py-2 font-bold text-gray-800 hover:bg-gray-100"
          href="/exercise/account"
        >
          Account
        </Link>
      </div>
      {/* 🐶 Pense à regarder l'exercice bonus*/}
    </div>
  )
}

export default Page
