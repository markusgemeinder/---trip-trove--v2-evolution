import useSWR from "swr";
import TripList from "@/components/Card/TripList";
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
      <TripList data={data} />
    </>
  );
}
