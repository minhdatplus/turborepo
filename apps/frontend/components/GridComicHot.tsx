import React from 'react'
import { Datum } from '../models/manga'

type Props = {
  manga: Datum[]
}

const GridComicHot = (props: Props) => {
  const data = props.manga
  return (
    <div className="mx-auto mt-2 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-start border-b-2">
        <div className="items-start justify-start text-left font-sans font-bold uppercase text-gray-500">
          <a href="#">Truyện Hot</a>
        </div>
        <div className="justify-right items-right flex-1 text-right">
          <a href="#">Truyện Hot</a>
        </div>
      </div>
      <div className="mx-auto max-w-6xl bg-gray-100">
        <div className="sm-gap-1 grid bg-gray-100 px-1 py-1 sm:grid-cols-6 sm:gap-1 sm:p-2 lg:grid-cols-8 lg:gap-2">
          {data?.length > 0 ? (
            data?.map((item: Datum) => (
              <a
                key={item.attributes.title}
                href={`${item.attributes.slug}/?page=1&pageSize=10`}
                className="relative mx-auto w-full items-center justify-center border-2 border-gray-300 text-center shadow-inner hover:scale-105 hover:bg-gray-100"
              >
                <img
                  className="w-full"
                  alt={item.attributes.title}
                  src={item.attributes.image}
                />
                <div className="absolute bottom-0 left-0 w-full bg-black p-0 text-center text-xs text-white opacity-80">
                  <h3>{item.attributes.title}</h3>
                </div>
              </a>
            ))
          ) : (
            <div>Đang cập nhật</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default GridComicHot
