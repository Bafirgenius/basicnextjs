import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

export default function Home() {
    return (
        <Layout pageTitle="Home Page">
            <img
                src="/testnextjs/doraemon.png"
                width={200}
                height={200}
                alt="doraemon"
            />
            <h1 className={styles.home}>Welcome Bayu Firnanda</h1>
        </Layout>
    );
}
