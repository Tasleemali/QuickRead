// components/SummaryCardSkeleton.jsx
export default function SummaryCardSkeleton() {
    return (
      <div className="rounded-xl p-2 shadow animate-pulse text-center overflow-hidden w-full max-w-[200px] mx-auto">
        <div className="aspect-[3/4] w-full mb-4 bg-gray-300 rounded-md"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
          <div className="h-3 bg-gray-300 rounded w-1/2 mx-auto"></div>
        </div>
      </div>
    );
  }
  