export default function SkeletonCar() {
  return (
    <div className="p-4 max-w-4xl mx-auto animate-pulse space-y-4">
      <div className="w-full h-96 bg-gray-300 rounded-lg" />
      <div className="h-8 bg-gray-300 rounded w-1/2" />
      <div className="h-6 bg-gray-300 rounded w-1/3" />
      <div className="h-24 bg-gray-200 rounded" />
    </div>
  );
}
