
import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Fetch data with API in client component </h1>
      <Link href="/productlist">
        Go to product page
      </Link>

      <h1>Fetch data with API in server component </h1>
      <Link href="/productlist2">
        Go to product page
      </Link>
    </main>
  );
}
