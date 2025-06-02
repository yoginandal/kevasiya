import { Suspense } from "react"
import Image from "next/image"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 bg-white backdrop-blur-sm bg-opacity-90 shadow-sm">
      {/* Premium Top Bar */}
      <div className="bg-gradient-to-r from-slate-800 to-cyan-900 text-white text-center py-2 text-xs font-light tracking-wider">
        <p>Free Shipping in Delhi NCR • Limited Time Offer</p>
      </div>

      {/* Elegant Navbar */}
      <header className="relative h-16 mx-auto">
        <nav className="max-w-screen-xl mx-auto px-4 flex items-center justify-between w-full h-full text-[#AE8F65]">
          {/* Left Section */}
          <div className="flex items-center gap-6">
            <SideMenu regions={regions} />
            <LocalizedClientLink
              href="/"
              className="flex items-center group"
              data-testid="nav-store-link"
            >
              <Image src="/logo.png" alt="Kevasiya" width={200} height={200} />

              {/* Middle Section */}
              <div className="hidden lg:flex items-center ml-6 gap-x-10">
                {["Baby", "Wedding", "Corporates", "Occasions"].map((item) => (
                  <LocalizedClientLink
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="relative font-medium text-[#997e58] hover:text-cyan-700 transition-colors duration-300 group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-cyan-700 transition-all duration-300 group-hover:w-full"></span>
                  </LocalizedClientLink>
                ))}
              </div>
            </LocalizedClientLink>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-8">
            <button
              aria-label="Search"
              className="text-[#AE8F65] hover:text-cyan-700 transition-colors duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>

            <LocalizedClientLink
              className="text-[#AE8F65] hover:text-cyan-700 transition-colors duration-300"
              href="/account"
              data-testid="nav-account-link"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </LocalizedClientLink>

            <Suspense
              fallback={
                <LocalizedClientLink
                  className="text-[#AE8F65] hover:text-cyan-700 transition-colors duration-300 flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"
                    />
                  </svg>
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
