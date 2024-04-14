import Head from "next/head";
import { SidebarNavigation } from "../componenets/SidebarNavigation";
export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Prolog</title>
          <meta name="description" content="Error monitoring" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <SidebarNavigation />
        </main>
      </div>
    </>
  );
}
