import { StatusCheck } from "@/helpers/StatusCheck";
import Head from "next/head";

import { GenericNavbar } from "../ui";

export const GenericLayout = ({ children, title }) => {
  return (
    <>
      <StatusCheck />
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <GenericNavbar />
      </nav>
      <main className="container-xl mt-1">{children}</main>
    </>
  );
};
