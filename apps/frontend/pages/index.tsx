import React from 'react'
import Head from 'next/head'
import { useState } from 'react'
import utils from '../libs/utils'
import { getMangaByCategory } from '../services/restful/manga'
import { useQuery } from 'react-query'
import { Datum } from '../models/manga'
import GridComicHot from '../components/GridComicHot'
import GridComicFull from '../components/GridComicFull'
import Banner from '../components/ads/Banner'

const Home = () => {
  const solutions = [
    {
      name: 'Truyện mới cập nhật',
      description:
        'Get a better understanding of where your traffic is coming from.',
      href: '#',
    },
    {
      name: 'Truyện hot',
      description: 'Speak directly to your customers in a more meaningful way.',
      href: '#',
    },
    {
      name: 'Truyện Full',
      description: "Your customers' data will be safe and secure.",
      href: '#',
    },
    {
      name: 'Tiên Hiệp Hay',
      description: "Connect with third-party tools that you're already using.",
      href: '#',
    },
    {
      name: 'Truyện Teen Hay',
      description:
        'Build strategic funnels that will drive your customers to convert',
      href: '#',
    },
    {
      name: 'Ngôn Tình Hay',
      description:
        'Build strategic funnels that will drive your customers to convert',
      href: '#',
    },
    {
      name: 'Ngôn Tình Sắc',
      description:
        'Build strategic funnels that will drive your customers to convert',
      href: '#',
    },
    {
      name: 'Ngôn Tình Ngược',
      description:
        'Build strategic funnels that will drive your customers to convert',
      href: '#',
    },
    {
      name: 'Ngôn Tình Sủng',
      description:
        'Build strategic funnels that will drive your customers to convert',
      href: '#',
    },
    {
      name: 'Ngôn Tình Hài',
      description:
        'Build strategic funnels that will drive your customers to convert',
      href: '#',
    },
    {
      name: 'Đam Mỹ Hài',
      description:
        'Build strategic funnels that will drive your customers to convert',
      href: '#',
    },
    {
      name: 'Đam Mỹ Hay',
      description:
        'Build strategic funnels that will drive your customers to convert',
      href: '#',
    },
    {
      name: 'Đam Mỹ H Văn',
      description:
        'Build strategic funnels that will drive your customers to convert',
      href: '#',
    },
    {
      name: 'Đam Mỹ Sắc',
      description:
        'Build strategic funnels that will drive your customers to convert',
      href: '#',
    },
  ]
  const { isSuccess, data, isLoading, isError, error } = useQuery<Array<Datum>>(
    ['getMangaByCategory', ''],
    () => getMangaByCategory('Tiên Hiệp'),
    {}
  )

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-gray-100 py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-1 flex-row px-20">
        <div className="mr-2 flex w-80 flex-none items-center bg-gray-200">
          <h3 className="mx-auto text-sm font-semibold">Ads</h3>
        </div>
        <div className="grow">
          <Banner adsImage="https://iads.staticscdn.net/ads/2021/06/23/images/otfu6mWu9qGvkKXtH0BtuSGFVVHrZQ54ACNEWRy1.jpg" />
          <GridComicHot manga={data} />
          <GridComicFull manga={data} />
        </div>
        <div className="ml-2 flex w-80 flex-none items-center bg-gray-200">
          <h3 className="mx-auto text-sm font-semibold">Ads</h3>
        </div>
      </main>
    </div>
  )
}

export default Home
