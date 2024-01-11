"use client";
import { ArrowLeft } from "react-feather";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import local from "@/app/i18n";
import { useEffect, useState } from "react";

export default function Search() {
  const searchParams = useSearchParams();
  const [loadState, setLoadState] = useState("loading");
  const [results, setResults] = useState([]);
  useEffect(() => {
    const query = searchParams.get("q");
    if (query) {
      fetch(`/api/search?q=${query}`)
        .then((res) => res.json())
        .then((json) => {
          setResults(json);
          setLoadState("loaded");
        });
    }
  }, [searchParams]);
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Link href="/" className={styles.goHome}>
          <ArrowLeft size={24}></ArrowLeft> {local.t("goHome")}
        </Link>
        <div>
          <h1 style={{ marginBottom: 10 }}>{local.t("search")}</h1>
          <div className={styles.divider} style={{ marginTop: 20 }}></div>
          <div className={styles.searchResults}>
            {results.map((res) => (
              <Link
                href={`/words/${res.id}`}
                key={res.id}
                className={styles.result}
              >
                <h3>{res.tzWord}</h3>
                <p>
                  {res.esWord && (
                    <>
                      <b>ES</b> <span>{res.esWord}</span>
                    </>
                  )}
                  {res.esWord && res.enWord && " | "}
                  {res.enWord && (
                    <>
                      <b>EN</b> <span>{res.enWord}</span>
                    </>
                  )}
                </p>
              </Link>
            ))}
          </div>
          {loadState == "loaded" && results.length < 1 && (
            <p>No words found.</p>
          )}
          {loadState == "loading" && <div className="loader"></div>}
        </div>
      </main>
    </>
  );
}