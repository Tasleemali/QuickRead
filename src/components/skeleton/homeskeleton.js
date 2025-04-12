// components/PageSkeleton.jsx

import SummaryCardSkeleton from "./summaryCartSkeleton";


export default function PageSkeleton() {
  return (
    <main className="bg-white text-black">
      <div className="max-w-screen-xl mx-auto px-4 py-8 space-y-10">

        {/* Hero Section */}
        <section className="text-center space-y-4 animate-pulse">
          <div className="h-8 bg-gray-300 rounded w-3/4 mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
          <div className="flex justify-center gap-4 pt-3">
            <div className="h-10 w-36 bg-gray-300 rounded-md"></div>
            <div className="h-10 w-48 bg-gray-300 rounded-md"></div>
          </div>
        </section>

        {/* Categories */}
        <section className="space-y-4">
          <div className="h-6 w-40 bg-gray-300 rounded animate-pulse"></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 animate-pulse">
            {Array.from({ length: 5 }).map((_, idx) => (
              <div key={idx} className="h-10 bg-gray-200 rounded-2xl"></div>
            ))}
          </div>
        </section>

        {/* Latest Summaries */}
        <section>
          <div className="h-6 w-48 bg-gray-300 rounded mb-4 animate-pulse"></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 place-items-center gap-3 md:gap-6 space-y-7">
            {Array.from({ length: 6 }).map((_, idx) => (
              <SummaryCardSkeleton key={idx} />
            ))}
          </div>
        </section>

        {/* Top Books */}
        <section>
          <div className="h-6 w-40 bg-gray-300 rounded mb-4 animate-pulse"></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 place-items-center gap-3 md:gap-6 space-y-7">
            {Array.from({ length: 6 }).map((_, idx) => (
              <SummaryCardSkeleton key={idx} />
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-gray-100 rounded-xl p-6 text-center space-y-3 animate-pulse">
          <div className="h-5 w-48 bg-gray-300 mx-auto rounded"></div>
          <div className="h-4 w-2/3 bg-gray-200 mx-auto rounded"></div>
          <div className="flex justify-center gap-2">
            <div className="h-10 w-56 bg-gray-300 rounded-xl"></div>
            <div className="h-10 w-32 bg-gray-300 rounded-xl"></div>
          </div>
        </section>

        {/* About */}
        <section className="text-center space-y-3 animate-pulse">
          <div className="h-5 w-36 mx-auto bg-gray-300 rounded"></div>
          <div className="h-4 w-2/3 mx-auto bg-gray-200 rounded"></div>
          <div className="h-4 w-1/2 mx-auto bg-gray-200 rounded"></div>
        </section>

      </div>
    </main>
  );
}
