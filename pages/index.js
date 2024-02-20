import useSWR from "swr";
import CardList from "@/components/Card/CardList";
// import Link from "next/link";

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/trips", {
    fallbackData: [],
  });

  if (error) return <div>Failed to load</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {/* <Link href="/test">Test Page</Link> */}
      <CardList data={data} />
    </>
  );
}
