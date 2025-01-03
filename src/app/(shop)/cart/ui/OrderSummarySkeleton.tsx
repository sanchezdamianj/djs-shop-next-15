
export const OrderSummaryLoading = () => {
    return (
      <div className="bg-white rounded-xl shadow-xl p-7 h-fit animate-pulse">
        <div className="h-8 bg-gray-200 rounded mb-2 w-1/3" /> {/* Title skeleton */}
  
        <div className="grid grid-cols-2 gap-y-2">
          <div className="h-4 bg-gray-200 rounded w-2/3" />
          <div className="h-4 bg-gray-200 rounded w-1/3 justify-self-end" />
          
          <div className="h-4 bg-gray-200 rounded w-2/3" />
          <div className="h-4 bg-gray-200 rounded w-1/3 justify-self-end" />
          
          <div className="h-4 bg-gray-200 rounded w-2/3" />
          <div className="h-4 bg-gray-200 rounded w-1/3 justify-self-end" />
          
          <div className="h-6 bg-gray-200 rounded w-2/3 mt-5" /> {/* Total label */}
          <div className="h-6 bg-gray-200 rounded w-1/3 mt-5 justify-self-end" /> {/* Total amount */}
        </div>
  
        <div className="mt-5 mb-2 w-full">
          <div className="h-10 bg-gray-200 rounded w-full" /> {/* Button skeleton */}
        </div>
      </div>
    )
  }