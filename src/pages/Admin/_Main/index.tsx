import React from 'react'
import AdminNavbar from './_Navbar'
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import List from './_List'

export default function AdminMainPage() {
  return (
    <>
      <AdminNavbar />
      <div className="mx-auto sm:mx-6 lg:mx-8 border-b border-gray-200">
        <div className="sm:mt-0 sm:pt-4 sm:pb-2 lg:pt-6 lg:pb-4">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            Create new job
          </button>
        </div>
      </div>
      <div>
        <div className="mx-auto sm:mx-6 lg:mx-8 mt-4 relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="search"
            name="search"
            id="search"
            className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
            placeholder="Search"
          />
        </div>
      </div>
      <List />
    </>
  )
}
