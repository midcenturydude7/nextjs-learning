/* eslint-disable react/no-unescaped-entities */
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "600" });

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-23 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I'm <span className="font-bold">Matt</span>.
        </span>
      </p>
    </main>
  );
}
