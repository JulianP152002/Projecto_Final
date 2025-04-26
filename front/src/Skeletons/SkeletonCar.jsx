function CarSkeleton() {
  return (
    <div className="animate-pulse flex flex-col gap-4 p-4  rounded-lg shadow-sm w-full max-w-sm bg-white">
      <div className="h-40 bg-gray-200 rounded w-full"></div>
      <div className="h-6 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
    </div>
  );
}

export default CarSkeleton;
