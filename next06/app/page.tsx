/* eslint-disable react/no-unescaped-entities */
import Posts from "./components/Posts";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "600" });

export default function Home() {
  return (
    <main className="pt-5 px-6 mx-auto">
      <p className="mt-23 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Matt</span>.
        </span>
      </p>
      <Posts />
    </main>
  );
}
