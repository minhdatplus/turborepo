/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  MenuIcon,
  ShieldCheckIcon,
  SupportIcon,
  XIcon,
  BookOpenIcon
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import {
  useQuery,
} from 'react-query';
import { getCategory } from '../../services/restful/category';
import { CategoryObject } from '../../models/category';
import utils from '../../libs/utils';


const solutions = [
  {
    name: 'Truyện mới cập nhật',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: BookOpenIcon,
  },
  {
    name: 'Truyện hot',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: BookOpenIcon,
  },
  {
    name: 'Truyện Full',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: BookOpenIcon
  },
  {
    name: 'Tiên Hiệp Hay',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: BookOpenIcon,
  },
  {
    name: 'Truyện Teen Hay',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: BookOpenIcon,
  },
  {
    name: 'Ngôn Tình Hay',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: BookOpenIcon,
  },
  {
    name: 'Ngôn Tình Sắc',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: BookOpenIcon,
  },
  {
    name: 'Ngôn Tình Ngược',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: BookOpenIcon,
  },
  {
    name: 'Ngôn Tình Sủng',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: BookOpenIcon,
  },
  {
    name: 'Ngôn Tình Hài',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: BookOpenIcon,
  },
  {
    name: 'Đam Mỹ Hài',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: BookOpenIcon,
  },
  {
    name: 'Đam Mỹ Hay',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: BookOpenIcon,
  },
  {
    name: 'Đam Mỹ H Văn',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: BookOpenIcon,
  },
  {
    name: 'Đam Mỹ Sắc',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: BookOpenIcon,
  },
]
const resources = [
  {
    name: 'Help Center',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Guides',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  {
    name: 'Security',
    href: '#',
    icon: ShieldCheckIcon
  },
  {
    name: 'Help Center',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Guides',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  {
    name: 'Security',
    href: '#',
    icon: ShieldCheckIcon
  },
  {
    name: 'Help Center',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Guides',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  {
    name: 'Security',
    href: '#',
    icon: ShieldCheckIcon
  },
]

export default function Header() {
  const { isSuccess, data, isLoading, isError, error } = useQuery<CategoryObject>(
    ["getCategory", ""],
    () => getCategory(),
    {}
  );
  const { classNames } = utils;
  if (isError) return <p>{(error as Error).message}</p>
  if (isSuccess) {
    console.log(JSON.stringify(data, null, 2))
  }

  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-sm inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400'
                    )}
                  >
                    <span>Danh sách</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-xs sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100"
                            >
                              <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-sm inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    )}
                  >
                    <span>Thể loại</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-2xl sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="grid grid-cols-3 gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {data?.data.map((item) => (
                            <a
                              key={item.attributes.name}
                              href={item.attributes.slug}
                              className="-m-3 p-3 items-start rounded-lg hover:bg-gray-100"
                            >
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.attributes.name}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Thể loại
            </a>
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Docs
            </a>

          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Sign in
            </a>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Pricing
                </a>

                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Docs
                </a>
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}