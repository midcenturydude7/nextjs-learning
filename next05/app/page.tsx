import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "600" });

export default function Home() {
  return (
    <main className={poppins.className}>
      <h1></h1>
    </main>
  );
}
