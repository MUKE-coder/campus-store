import { Skeleton } from "@/components/ui/skeleton"

export function HomeSkeleton() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  min-h-[40vh] bg-[#0fa3ae]">
      {/* Main banner */}
      <div className="flex gap-2 w-full">
      <div className="lg:w-[20%] lg:block hidden">
      <Skeleton className="w-full h-64 rounded-lg my-4 bg-white" />
      </div>
      <div className="lg:w-[60%] w-full">
      <Skeleton className="w-full h-64 rounded-lg my-4 bg-white" />
      </div>
      <div className="lg:w-[20%] lg:block hidden">
      <Skeleton className="w-full h-64 rounded-lg my-4 bg-white" />
      </div>
 
      </div>
      

      {/* Category icons
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 my-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <Skeleton className="h-16 w-16 rounded-full bg-[#64748b]" />
            <Skeleton className="h-4 w-20 mt-2 bg-[#64748b]" />
          </div>
        ))}
      </div> */}
    </div>
  )
}

export function CategorySkeleton() {
  return (
    <div className='min-h-[40vh] bg-[#633185] shadow-lg w-full lg:p-2 md:px-3 px-1 lg:rounded-sm'>
      <div className='w-full bg-white min-h-full lg:rounded-lg p-4 grid md:grid-cols-4 grid-cols-2 lg:grid-cols-6 gap-2'>
        {[...Array(6)].map((_, index) => (
          <div key={index} className='relative flex flex-col items-center justify-center rounded-lg'>
            <Skeleton className="w-full h-[90%] mb-1 rounded-xl" />
            <Skeleton className="w-3/4 h-4" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProductCardsSkeleton() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex items-center mb-4 justify-between mt-8 ">
        <Skeleton className="h-10 w-[100%] bg-white" />
        {/* <Skeleton className="h-5 w-[20%] bg-white" /> */}
        {/* <Skeleton className="h-5 w-[20%] bg-white" /> */}
        </div>
      {/* Product cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex flex-col space-y-2">
            <Skeleton className="w-full h-40 rounded-lg" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <div className="flex items-center space-x-2">
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-4 w-1/4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function KyajaSkeleton() {
  return (
    <>
      <HomeSkeleton />
      <CategorySkeleton />
      <ProductCardsSkeleton />
    </>
  )
}