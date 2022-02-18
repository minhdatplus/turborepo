import { GetServerSideProps } from 'next'
import Banner from '../../components/ads/Banner'
import { Tab } from '@headlessui/react'
import {
  ChapterByMangaSlug,
  getChapterByMangaSlug,
} from '../../services/restful/chapter'
import {
  ArrowCircleRightIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/solid'
import { useQuery } from 'react-query'
import {
  MangaResponse,
  MangaDetail,
  MangaInfo,
  Chapter,
  Meta,
  Data,
} from '../../models/mangaDetail'
import { NextRouter, useRouter } from 'next/router'
import Pagination from '../../components/Pagination'

const MangaDetail = (props) => {
  const info: MangaDetail = props.info
  const chapters: Array<Chapter> = props.chapters
  const pageInfo: Meta = props.pageInfo
  const totalPage = Math.ceil(
    Number(pageInfo.total) / Number(pageInfo.pageSize)
  )
  const currentPage = Number(pageInfo.page)
  const pageSize = Number(pageInfo.pageSize)
  const totalCount = Number(pageInfo.total)
  const router = useRouter()
  // const changePage = (router: NextRouter) => {
  //   router.push(`${info.slug}?page=${page}&pageSize=${pageSize}`)
  // }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-gray-100 py-2 font-arial">
      <main className="flex max-w-7xl flex-1 flex-col px-20">
        <Banner adsImage="https://iads.staticscdn.net/ads/2021/06/23/images/otfu6mWu9qGvkKXtH0BtuSGFVVHrZQ54ACNEWRy1.jpg" />
        {/* <div className="mt-2 grid max-w-7xl grid-flow-col grid-rows-3 gap-4">
          <div className="... col-span-6 row-span-6 bg-slate-500">
            <div>
              <span>Test</span>
            </div>
          </div>
          <div className="... col-span-2 bg-slate-500">02</div>
          <div className="... col-span-2 row-span-2 bg-slate-500">03</div>
        </div> */}
        <div className="mt-4 flex flex-row">
          <div className="mx-auto flex basis-1/3 items-center justify-center">
            <a
              href="#"
              className="overflow-hidden shadow-slate-300 drop-shadow-lg"
            >
              <img
                className="m-auto w-full duration-300 ease-out hover:scale-110"
                alt={info.slug}
                src={info.image}
              />
            </a>
          </div>
          <div className="flex basis-2/3">
            <div className="mt-1 ml-1 flex flex-col gap-4">
              <h1 className="overflow-visible font-arial text-3xl font-semibold capitalize not-italic normal-nums leading-8 text-gray-500">
                {info.title}
              </h1>
              <div className="flex flex-col gap-1">
                <div className="flex flex-row gap-2">
                  <h3>Tác giả:</h3>
                  <a
                    href="#"
                    className="transition-{border} ease-{300} my-auto items-center rounded-2xl border border-solid border-borderAuthor px-2 text-center font-arial text-xs leading-6 text-colorAuthor"
                  >
                    {info.author}
                  </a>
                </div>
                <div className="flex flex-row gap-2">
                  <h3>Thể loại:</h3>
                  <a
                    href="#"
                    className="transition-{border} ease-{300} my-auto items-center rounded-2xl border border-borderCategory px-2 text-center font-arial text-xs leading-6 text-colorCategory hover:text-colorCategory"
                  >
                    Tiên Hiệp, Huyền Huyễn
                  </a>
                </div>
                <div className="flex flex-row gap-2">
                  <h3>Nguồn:</h3>
                  <a
                    href="#"
                    className="transition-{border} ease-{300} my-auto items-center rounded-2xl border border-solid border-borderAuthor px-2 text-center font-arial text-xs leading-6 text-colorAuthor"
                  >
                    {info.source}
                  </a>
                </div>
                <div className="flex flex-row gap-2">
                  <h3>Trạng thái:</h3>
                  <a
                    href="#"
                    className="transition-{border} ease-{300} my-auto items-center rounded-2xl border border-solid border-borderAuthor px-2 text-center font-arial text-xs leading-6 text-colorAuthor"
                  >
                    {info.status === 0 ? 'Đang ra' : 'Full'}
                  </a>
                </div>
                <div className="mt-5 flex flex-row">
                  <em className="not-italic">
                    <span className="my-auto w-32 items-center p-0 text-center font-arial text-xl leading-9">
                      156
                    </span>
                  </em>
                  <p className="my-2 ml-1 flex items-center justify-center text-center align-middle text-xs leading-6 text-gray-600">
                    Yêu thích
                  </p>
                  <i className="mx-2 text-lg leading-9 text-gray-300">|</i>
                  <em className="not-italic">
                    <span className="my-auto w-32 items-center p-0 text-center font-arial text-xl leading-9">
                      888888
                    </span>
                  </em>
                  <p className="my-2 ml-1 flex items-center justify-center text-center align-middle text-xs leading-6 text-gray-600">
                    Lượt xem
                  </p>
                  <i className="mx-2 text-lg leading-9 text-gray-300">|</i>
                  <em className="not-italic">
                    <span className="my-auto w-32 items-center p-0 text-center font-arial text-xl leading-9">
                      666
                    </span>
                  </em>
                  <p className="my-2 ml-1 flex items-center justify-center text-center align-middle text-xs leading-6 text-gray-600">
                    Theo dõi
                  </p>
                  <i className="mx-2 text-lg leading-9 text-gray-300">|</i>
                  <em className="not-italic">
                    <span className="my-auto w-32 items-center p-0 text-center font-arial text-xl leading-9">
                      19
                    </span>
                  </em>
                  <p className="my-2 ml-1 flex items-center justify-center text-center align-middle text-xs leading-6 text-gray-600">
                    Đề cử
                  </p>
                </div>
                <div className="mt-5 flex flex-row gap-4">
                  <a
                    href="#"
                    className="transition-{border} ease-{300} my-auto w-32 items-center border border-solid border-colorCategory bg-colorCategory px-2 text-center font-arial text-sm font-semibold leading-9 text-white"
                  >
                    Đọc truyện
                  </a>
                  <a
                    href="#"
                    className="transition-{border} ease-{300} my-auto w-32 items-center border border-solid border-colorAuthor px-2 text-center font-arial text-sm font-semibold leading-9 text-colorAuthor"
                  >
                    Yêu thích
                  </a>
                  <a
                    href="#"
                    className="transition-{border} ease-{300} my-auto w-32 items-center border border-solid border-colorAuthor px-2 text-center font-arial text-sm font-semibold leading-9 text-colorAuthor"
                  >
                    Theo dõi
                  </a>
                  <a
                    href="#"
                    className="transition-{border} ease-{300} my-auto w-32 items-center border border-solid border-colorAuthor px-2 text-center font-arial text-sm font-semibold leading-9 text-colorAuthor"
                  >
                    Đề cử
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mr-2 flex basis-1/3 flex-col items-end justify-start gap-2">
            <div className="flex items-center justify-end text-3xl italic">
              <h3>7.1</h3>
              <h5 className="text-lg text-gray-400">/10</h5>
            </div>
            <div className="flex gap-1">
              <h5 className="text-lg text-gray-400">68688</h5>
              <h5 className="my-0.5 text-black">đánh giá</h5>
            </div>
            <div className="duration-300 ease-out">
              <ul className="flex justify-center gap-2">
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="heart"
                    className="mr-1 w-6 text-red-500 hover:scale-150 hover:text-red-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="heart"
                    className="mr-1 w-6 text-red-500 hover:scale-150 hover:text-red-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="heart"
                    className="mr-1 w-6 text-red-500 hover:scale-150 hover:text-red-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="heart"
                    className="mr-1 w-6 hover:scale-150 hover:text-red-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="heart"
                    className="mr-1 w-6 hover:scale-150 hover:text-red-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                    ></path>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-7 flex">
          <div className="flex basis-full flex-col">
            <Tab.Group defaultIndex={0}>
              <Tab.List className="mb-3 flex gap-2">
                <Tab
                  className={({ selected }) =>
                    selected
                      ? 'border-b-2 border-blue-500 px-5 py-1 text-lg text-blue-500'
                      : 'px-5 py-1 text-lg text-gray-400'
                  }
                >
                  <button>Thông tin chi tiết</button>
                </Tab>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? 'border-b-2 border-blue-500 px-5 py-1 text-lg text-blue-500'
                      : 'px-5 py-1 text-lg text-gray-400'
                  }
                >
                  <button>Danh sách chương ({pageInfo.total} chương)</button>
                </Tab>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? 'border-b-2 border-blue-500 px-5 py-1 text-lg text-blue-500'
                      : 'px-5 py-1 text-lg text-gray-400'
                  }
                >
                  <button>Bình luận</button>
                </Tab>
              </Tab.List>
              <Tab.Panels className="font-arial">
                <Tab.Panel>
                  <div className="flex flex-row">
                    <div className="flex basis-2/3">
                      <h4
                        className="mt-2 h-auto overflow-hidden text-left text-sm text-gray-600"
                        dangerouslySetInnerHTML={{ __html: info.description }}
                      />
                    </div>
                    <div className="flex basis-1/3 bg-bgAuthor pt-2">
                      <div className="flex grow flex-col">
                        <div className="mx-auto py-5">
                          <div className="relative mx-auto mb-4 h-32 w-32">
                            <div className="group bg-purple table h-full w-full cursor-pointer overflow-hidden rounded-full text-center shadow-inner">
                              <span className="hidden align-middle font-bold text-white group-hover:table-cell">
                                KR
                              </span>
                              <img
                                src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png"
                                alt="lovely avatar"
                                className="visible h-full w-full object-cover object-center group-hover:hidden"
                              />
                            </div>
                          </div>
                          <div className="w-ful mx-3 my-auto border-b border-gray-500 font-semibold capitalize">
                            <a
                              className="mb-2 cursor-pointer hover:text-red-500"
                              href="#"
                            >
                              Đường Gia Tam Thiếu
                            </a>
                          </div>
                        </div>
                        <div className="font-arial">
                          <div className="border-t-0 border-gray-200">
                            <dl>
                              <div className="px-4 py-2 text-center">
                                <dd className="mt-1  text-left text-base font-semibold text-gray-900  sm:col-span-2 sm:mt-0">
                                  Truyện cùng tác giả
                                </dd>
                              </div>
                              <div className="px-4 py-2">
                                <dd className="mt-1 cursor-pointer border-b border-gray-300 text-base text-gray-900 hover:text-red-500 sm:col-span-2 sm:mt-0">
                                  Backend Developer
                                </dd>
                              </div>
                              <div className="px-4 py-2">
                                <dd className="mt-1 cursor-pointer border-b border-gray-300 text-base text-gray-900 hover:text-red-500 sm:col-span-2 sm:mt-0">
                                  margotfoster@example.com
                                </dd>
                              </div>
                            </dl>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="flex flex-col">
                    <div className="flex w-full border-b border-gray-800 pb-3">
                      <h3 className="h-6 text-lg font-bold text-gray-600">
                        Chương mới nhất
                      </h3>
                    </div>
                    <div className="flex w-full border-b border-gray-800 pb-3">
                      <h3 className="h-6 text-lg font-bold text-gray-600">
                        Danh sách chương
                      </h3>
                    </div>
                    <div className="w-full pt-2">
                      <div className="grid grid-cols-3">
                        {chapters?.map((item: any) => (
                          <div
                            className="text-start h-10 cursor-pointer content-center items-center justify-center border-b border-gray-300 py-2 align-middle text-sm hover:scale-105 hover:text-red-500"
                            key={item.slug}
                          >
                            <div className="flex flex-row gap-1">
                              <div className="flex">
                                <ArrowCircleRightIcon className="h-5 w-5" />
                              </div>
                              <div className="flex max-w-0.5 overflow-hidden overflow-ellipsis whitespace-nowrap">
                                {item.title.replace(info.title + ' - ', '')}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Pagination
                      rootPath={info.slug}
                      className=""
                      router={router}
                      currentPage={currentPage}
                      totalCount={totalCount}
                      pageSize={pageSize}
                      siblingCount={1}
                    />
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  {/* {JSON.stringify(props.details[0], null, 2)} */}sss
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const params: ChapterByMangaSlug = {
    page: Number(ctx.query.page),
    pageSize: Number(ctx.query.pageSize),
    mangaSlug: String(ctx.params['mangaSlug']),
  }

  try {
    const response = await getChapterByMangaSlug(params)
    const resData: MangaResponse = response
    const mangaInfo: MangaInfo = resData.data
    const mangaData: Data = mangaInfo.data
    const mangaDetail: MangaDetail = mangaData.mangaDetail
    const chapters: Array<Chapter> = mangaData.chapters
    const pageInfo: Meta = mangaInfo.meta
    return {
      props: {
        info: mangaDetail,
        chapters: chapters,
        pageInfo: pageInfo,
      },
    }
  } catch (error) {
    console.error(error)
    return {
      notFound: true,
    }
  }
}

export default MangaDetail
