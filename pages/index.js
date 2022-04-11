import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="homepage-bg">
      <section className="homepage">
        <h1>
          MindArc front-end Assessment
          <br />
          Edward Vercoe
        </h1>

        <div className="home-links">
          <Link href="/exercise-1">Exercise 1</Link>
          <Link href="/exercise-2">Exercise 2</Link>
        </div>
      </section>
    </main>
  );
}
