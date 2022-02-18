import React from 'react'
import PropTypes from 'prop-types'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { DOTS, usePagination } from '../hooks/usePagination'

type Props = {
  router: any
  totalCount: number
  siblingCount: number
  currentPage: number
  pageSize: number
  rootPath: string
  className: string
}

const Pagination = (props: Props) => {
  const {
    router,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    rootPath,
    className,
  } = props

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = (): void => {
    // onPageChange(currentPage + 1)
    console.log('sssssss')
    router.push(`${rootPath}?page=${currentPage + 1}&pageSize=${pageSize}`)
  }

  const onPageChange = (pageNumber: number): void => {
    router.push(`${rootPath}?page=${pageNumber}&pageSize=${pageSize}`)
  }

  const onPrevious = (): void => {
    // onPageChange(currentPage - 1)
    router.push(`${rootPath}?page=${currentPage - 1}&pageSize=${pageSize}`)
  }

  let lastPage = paginationRange[paginationRange.length - 1]

  return (
    <div className="flex w-full border-t border-gray-200 pt-2">
      <div className="flex basis-full flex-row items-center justify-between  px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <a
            href="#"
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="#"
            onClick={onNext}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to{' '}
              <span className="font-medium">{pageSize}</span> of{' '}
              <span className="font-medium">{totalCount}</span> results
            </p>
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              {currentPage === 1 ? (
                <></>
              ) : (
                <button className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon
                    onClick={() => onPrevious()}
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </button>
              )}
              {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
              {paginationRange.map((pageNumber: any) => {
                if (pageNumber === DOTS) {
                  return (
                    <span
                      key={pageNumber}
                      className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700"
                    >
                      &#8230;
                    </span>
                  )
                }

                return (
                  <a
                    href="#"
                    key={pageNumber}
                    onClick={() => onPageChange(Number(pageNumber))}
                    className={
                      Number(pageNumber) === currentPage
                        ? `relative z-10 inline-flex  items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600`
                        : `relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50`
                    }
                  >
                    {pageNumber}
                  </a>
                )
              })}
              {currentPage === lastPage ? (
                <></>
              ) : (
                <button className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon
                    onClick={() => onNext()}
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </button>
              )}
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pagination
