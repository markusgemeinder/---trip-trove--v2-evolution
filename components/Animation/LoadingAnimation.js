import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const DynamicLottie = dynamic(() => import("react-lottie"), { ssr: false });

export default function LoadingAnimation() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    import("/public/animations/trip-trove-loading.json")
      .then((data) => {
        setAnimationData(data.default);
      })
      .catch((error) => {
        console.error("Error loading animation:", error);
      });
  }, []);

  if (!animationData) return null;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return <DynamicLottie options={defaultOptions} height={32} width={80} />;
}
