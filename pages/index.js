import Head from "next/head";
import Image from "next/image";
import { Inter, Tajawal } from "next/font/google";
import styles from "@/styles/Home.module.css";
import mapSVG from "../assets/SaudiMap.svg";
import Navbar from "@/components/Navbar";
import LiteraryEras from "@/components/LiteraryEras";
import Poets from "@/components/Poets";
import PoetryIn from "@/components/PoetryIn";
import CustomSelect from "@/components/CustomSelect";

const inter = Inter({ subsets: ["latin"] });

const tajawal = Tajawal({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Zamakan</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${tajawal.className}`} dir="rtl">
        <Navbar />
        <LiteraryEras />
        <Poets />
        <CustomSelect />

        <PoetryIn />
      </main>
    </>
  );
}
