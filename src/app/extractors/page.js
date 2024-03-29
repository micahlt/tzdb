"use client";
import Link from "next/link";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";

export default function Extractors() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div>
          <h2>Extractors</h2>
          <div className={styles.buttons}>
            <Link
              href="/extractors/extractor-funky"
              title="Weird formatting (do not use)"
            >
              Funky Extractor
            </Link>
            <Link
              href="/extractors/extractor-tzes"
              title="TZ to ES with no metadata"
            >
              TZ-ES Extractor
            </Link>
            <Link
              href="/extractors/extractor-dictionary"
              title="Dictionary extractor"
            >
              Dictionary Extractor
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
