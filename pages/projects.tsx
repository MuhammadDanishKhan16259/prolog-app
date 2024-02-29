import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
// import styles from "@/styles/Home.module.css";
// import styles from "@/styles/ConstructPage.module.css";

import styled from "styled-components";
import { SidebarNavigation } from "../componenets/SidebarNavigation";
// import { Container } from "react-dom";

const inter = Inter({ subsets: ["latin"] });
type ContainerProps = {
  theme: string;
};

const Container = styled.div<ContainerProps>`
  padding: 0 2rem;
  ${(props) => props.theme === "dark" && "background: black"}
`;
export default function Home() {
  return (
    <>
      <Container theme="Light">
        <Head>
          <h1>
            Welcome <a href="https://nextjs.org"> to Prolong APP ! </a>
          </h1>
          <title>Create Next App</title>

          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={`${styles.main} ${inter.className}`}>
          <SidebarNavigation />
          <div className={styles.description}>
            <p>
              Get started by editing&nbsp;
              <code className={styles.code}>pages/index.tsx</code>
            </p>
          </div>
        </main>
      </Container>
    </>
  );
}