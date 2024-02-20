import useSWR from "swr";
import PresetForm from "@/components/PresetForm";

export default function Presets() {
  // const { data, error, isLoading } = useSWR("/api/presets", {
  //   fallbackData: [],
  // });

  // if (error) return <div>Failed to load</div>;

  // if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {/* <PresetForm presets={data} /> */}
      <PresetForm />
    </>
  );
}
