import * as React from 'react'
import { Link } from 'gatsby'
import logo from '../Logo/images/logo.svg'
import { Popover } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  // tslint:disable-next-line:no-submodule-imports
} from '@heroicons/react/24/outline'
import navigation from '../../helpers/navigation'

export default function Header() {
  return (
    <Popover tw="relative bg-white sticky top-0 z-30 w-full border-b-2 border-gray-100">
      <div tw="mx-auto max-w-7xl px-6">
        <div tw="flex items-center justify-between p-6 md:justify-center md:space-x-10">
          <div tw="flex justify-start md:w-0 md:flex-1">
            <Link to="/">
              <span tw="sr-only">Codemanufacture</span>
              <img tw="h-4 w-auto sm:h-6" src={logo} alt="Codemanufacture" />
            </Link>
          </div>
          <div tw="-my-2 -mr-2 md:hidden">
            <Popover.Button tw="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span tw="sr-only">Open menu</span>
              <Bars3Icon tw="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div tw="hidden md:flex md:items-start md:justify-center">
            <Popover.Group as="nav" tw="hidden space-x-10 md:flex">
              {navigation.main.map(item => (
                <Link
                  key={`desktop-nav-${item.name}`}
                  to={item.path}
                >
                   <span tw="text-base font-medium text-gray-500 hover:text-gray-900">
                   {item.name}
                   </span>
                </Link>
              ))}
            </Popover.Group>
          </div>
        </div>
      </div>
      <Popover.Panel tw="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-20">
        <div tw="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div tw="px-5 pt-5 pb-6">
            <div tw="flex items-center justify-between">
              <div>
                <img tw="h-6 w-auto" src={logo} alt="Codemanufacture" />
              </div>
              <div tw="-mr-2">
                <Popover.Button tw="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span tw="sr-only">Close menu</span>
                  <XMarkIcon tw="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div tw="mt-6">
              <nav tw="grid gap-y-8">
                {navigation.main.map(item => (
                  <Link
                    key={`mobile-nav-${item.name}`}
                    to={item.path}
                  >
                    <span tw="text-base font-medium text-gray-500 hover:text-gray-900">
                    {item.name}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  )
}
