import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {/* <Link href={"/example-1"}>example-1</Link> */}
      <Link href={"/berachain"} className="uppercase text-4xl">
        berachain
      </Link>
    </main>
  );
}
