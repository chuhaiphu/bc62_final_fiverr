import AdminAvatar from '~/assets/AdminAvatar.png'
import FiverLogoShort from '~/assets/Fiverr-Logo-short.png'

const navigation = [
  { name: 'User Management', href: '#', current: true },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Documents', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function AdminSidebar() {
  return (
    <div className="h-full flex grow flex-col gap-y-5 overflow-y-auto border-r px-6">
      <div className="flex h-16 shrink-0 items-center">
        <img
          className="h-8 w-auto"
          src={FiverLogoShort}
        />
        <span className="text-[1.1vw] font-bold">ADMIN HOME PAGE</span>
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                      'block rounded-md py-2 pr-2 pl-10 text-sm leading-6 font-semibold text-gray-700'
                    )}
                  >
                    {item.name}
                  </a>
                </li>
              ))}

            </ul>
          </li>
          <li className="-mx-6 mt-auto">
            <a
              href="#"
              className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
            >
              <img
                className="h-8 w-8 rounded-full bg-gray-50"
                src={AdminAvatar}
              />
              <span aria-hidden="true">Admin</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
