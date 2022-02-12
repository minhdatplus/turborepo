import React from 'react'
import Head from 'next/head'
import { useState } from 'react'
import utils from '../libs/utils'

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

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-1 flex-col px-20">
        <div className="max-w-7xl items-center justify-center text-right">
          <img
            className="text-center"
            alt=""
            src="https://iads.staticscdn.net/ads/2021/03/24/images/4zUU3LCQYPvLYKsHFuqirdHxBpkgxEmtDPFAbayD.jpg"
          />
        </div>
        <div className="mx-auto mt-2 w-full">
          <div className="mx-auto flex max-w-7xl items-center justify-start border-b-2">
            <div className="items-start justify-start text-left font-sans font-bold uppercase text-indigo-600">
              <a href="#">Truyện Hot</a>
            </div>
            <div className="justify-right items-right flex-1 text-right">
              <a href="#">Truyện Hot</a>
            </div>
          </div>
          <div className="mx-auto flex h-80 w-full bg-gray-300">
            <div className="grid grid-cols-8 gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
              {solutions.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className="-m-3 items-start rounded-lg p-3 hover:bg-gray-100"
                >
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">
                      {item.name}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="ml-2 h-4" />
        </a>
      </footer>
    </div>
  )
}

export default Home
