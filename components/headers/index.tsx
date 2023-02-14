import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
    return (
        <header className={styles.container}>
            <ul className={styles.list}>
                <li>
                    <Link className={styles.item} href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        className={styles.item}
                        href="/blog"
                        passHref
                    >
                        Blog
                    </Link>
                </li>
                <li>
                    <Link className={styles.item} href="/users">
                        Users
                    </Link>
                </li>
            </ul>
        </header>
    );
}
