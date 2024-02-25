import { useState, useEffect } from "react";
import useSWR from "swr";
import TripList from "@/components/Card/TripList";
import LoadingMessage from "@/components/Message/LoadingMessage";
import { isLoadingMessageDuration } from "@/lib/utils";

export default function HomePage() {
  const [isLoadingTimeout, setIsLoadingTimeout] = useState(true);
  const { data, error, isLoading } = useSWR("/api/trips", {
    fallbackData: [],
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoadingTimeout(false);
    }, isLoadingMessageDuration);

    return () => clearTimeout(timeout);
  }, []);

  if (error) return <div>Failed to load</div>;

  if (isLoading || isLoadingTimeout) return <LoadingMessage />;

  return (
    <>
      {/* <Link href="/test">Test Page</Link> */}
      <TripList data={data} />
    </>
  );
}
