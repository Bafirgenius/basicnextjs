import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Image from "next/image";

export default function Home() {
    return (
        <Layout pageTitle="Home Page">
            <Image
                src="/doraemon.png"
                width={200}
                height={200}
                alt="doraemon"
            />
            <h1 className={styles.home}>Welcome Bayu Firnanda</h1>
        </Layout>
    );
}
