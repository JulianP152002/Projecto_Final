export default function VideoSkeleton({ height = "h-64" }) {
  return (
    <div
      className={`w-full +h-40rem bg-gray-300 animate-pulse rounded-lg shadow-sm`}
    />
  );
}
