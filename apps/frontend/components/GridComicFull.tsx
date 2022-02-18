import React from 'react'
import { Datum } from '../models/manga'

type Props = {
  manga: Datum[]
}

const GridComicFull = (props: Props) => {
  const data = props.manga

  return (
    <div className="mx-auto mt-2 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-start border-b-2">
        <div className="items-start justify-start text-left font-sans font-bold uppercase text-gray-500">
          <a href="#">Truyện Đã Hoàn Thành</a>
        </div>
        <div className="justify-right items-right flex-1 text-right">
          <a href="#">Truyện Hot</a>
        </div>
      </div>
      <div className="mx-auto max-w-6xl bg-gray-100">
        <div className="sm-gap-1 grid bg-gray-100 px-1 py-1 sm:grid-cols-6 sm:gap-1 sm:p-2 lg:grid-cols-6 lg:gap-6">
          {data?.map((item: Datum) => (
            <a
              key={item.attributes.title}
              href="#"
              className="relative mx-auto w-full items-center justify-center text-center hover:bg-gray-100"
            >
              <img
                className="w-full border-2"
                alt={item.attributes.title}
                src={item.attributes.image}
              />
              <div className="p-1.5 text-center text-xs leading-4">
                <h3 className="overflow-hidden text-ellipsis whitespace-nowrap p-1.5 text-sm font-bold">
                  {item.attributes.title}
                </h3>
                <small className="overflow-hidden text-ellipsis whitespace-nowrap rounded bg-blue-900 pt-1 pr-1 pb-1 pl-1 text-xs font-semibold text-white">
                  Full - 250 chương
                </small>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GridComicFull
