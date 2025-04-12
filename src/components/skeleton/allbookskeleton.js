export default function AllBooksSkeleton() {
    return (
      <div className="bg-white text-black">
        <div className="max-w-screen px-5 py-5 space-y-6 animate-pulse">
          <div className="h-10 w-1/2 bg-gray-300 rounded"></div>
  
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 place-items-center gap-3 md:gap-6 space-y-7">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="rounded-xl p-2 shadow text-center overflow-hidden w-full max-w-[200px] mx-auto"
              >
                <div className="aspect-[3/4] w-full mb-4 bg-gray-300 rounded-md"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  