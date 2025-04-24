import { useEffect, useRef, useState } from "react";
import VideoSkeleton from "../../Skeletons/VideoSkeleton";
function VideoDesing({ src, trigger = "visibility", ...props }) {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // IntersectionObserver
  useEffect(() => {
    if (trigger !== "visibility") return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    const currentVideo = videoRef.current;
    if (currentVideo) observer.observe(currentVideo);

    return () => {
      if (currentVideo) observer.unobserve(currentVideo);
    };
  }, [trigger]);

  // Control de reproducción
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (trigger === "visibility") {
      isVisible ? video.play().catch(() => {}) : video.pause();
    } else if (trigger === "hover") {
      isHovered ? video.play().catch(() => {}) : video.pause();
    }
  }, [isVisible, isHovered, trigger]);

  return (
    <div className="relative w-full">
      {!isLoaded && <VideoSkeleton />}

      <video
        ref={videoRef}
        src={src}
        muted
        loop
        preload="metadata"
        onMouseEnter={() => trigger === "hover" && setIsHovered(true)}
        onMouseLeave={() => trigger === "hover" && setIsHovered(false)}
        onCanPlay={() => setIsLoaded(true)}
        className={`w-full rounded-lg shadow-md transition duration-300 ${
          !isLoaded ? "hidden" : ""
        }`}
        {...props}
      />
    </div>
  );
}

export default VideoDesing;
