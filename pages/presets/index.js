import useSWR from "swr";
import PresetCardList from "@/components/PresetCardList";
// import Link from "next/link";

export default function HomePage() {
  const {
    data: presets,
    error,
    isLoading,
  } = useSWR("/api/presets", {
    fallbackData: [],
  });

  if (error) return <div>Failed to load</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {/* <Link href="/test">Test Page</Link> */}
      <PresetCardList presets={presets} />
    </>
  );
}
