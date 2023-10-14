import { CaretLeft, CaretRight } from "phosphor-react"

interface PaginatorProps {
  loading: boolean
  onPreviousPage: () => void
  onNextPage: () => void
  currentPage: number
  lastPage: number
}

export default function Paginator({
  loading,
  currentPage, 
  lastPage, 
  onPreviousPage, 
  onNextPage
}: PaginatorProps) {
  function handlePreviousPage() {
    onPreviousPage()
  }

  function handleNextPage() {
    onNextPage()
  }

  return (
    <div className="flex justify-between">
      <button 
        onClick={handlePreviousPage} 
        disabled={currentPage === 1 || loading} 
        className="flex items-center justify-center py-2 pr-3 pl-2 gap-1 rounded-md cursor-pointer text-figma-purple-100 hover:text-figma-gray-200 hover:bg-figma-gray-500 transition-all duration-300 disabled:cursor-not-allowed disabled:hover:text-figma-purple-100 disabled:hover:bg-figma-gray-800"
      >
        <CaretLeft size={20} />
        Previous
      </button>
      
      <button 
        onClick={handleNextPage} 
        className="flex items-center justify-center py-2 pl-3 pr-2 gap-1 rounded-md cursor-pointer text-figma-purple-100 hover:text-figma-gray-200 hover:bg-figma-gray-500 transition-all duration-300 disabled:cursor-not-allowed disabled:hover:text-figma-purple-100 disabled:hover:bg-figma-gray-800"
        disabled={currentPage === lastPage || loading} 
      >
        Next
        <CaretRight size={20} />
      </button>
    </div>
  )
}
