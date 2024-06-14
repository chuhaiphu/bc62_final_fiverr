import { useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

import FiverLogo from '~/assets/Fiverr_Logo_Black.png'
import AdminAvatar from '~/assets/AdminAvatar.png'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function AdminNavbar() {

  return (
    <header className="bg-white shadow-md">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img className="h-8 w-auto" src={FiverLogo} alt="" /> 
          </a>
        </div>
        <div className="flex justify-end">
          <Menu as="div" className="relative ml-3">
            <div>
              <MenuButton className="flex rounded-full bg-white text-sm border-none shadow-lg">
                <img
                  className="h-10 w-10 rounded-full"
                  src={AdminAvatar}
                />
              </MenuButton>
            </div>
              <MenuItems className="absolute right-0 z-10 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                <MenuItem>
                  {({ focus }) => (
                    <a
                      href="#"
                      className={classNames(
                        focus ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700'
                      )}
                    >
                      Settings
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ focus }) => (
                    <a
                      href="#"
                      className={classNames(
                        focus ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700'
                      )}
                    >
                      Sign out
                    </a>
                  )}
                </MenuItem>
              </MenuItems>
          </Menu>
        </div>
      </nav>
    </header>
  )
}
