import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import styles from "../../styles/Users.module.css";

interface UsersProps {
    dataUser: Array<any>;
}

export default function Users(props: UsersProps) {
    const { dataUser } = props;
    const router = useRouter();
    console.log(dataUser);
    return (
        <Layout pageTitle="Users Page">
            {dataUser.map((user) => {
                return (
                    <div
                        key={user.id}
                        onClick={() =>
                            router.push(`users/${user.id}`)
                        }
                        className={styles.card}
                    >
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                );
            })}
        </Layout>
    );
}

export async function getStaticProps() {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );
    const dataUser = await res.json();
    return {
        props: {
            dataUser,
        },
    };
}
