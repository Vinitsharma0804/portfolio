import { forwardRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { motion, useScroll, useTransform } from 'framer-motion'

import { Button } from '@/components/Button'
import {
  MobileNavigation,
  useIsInsideMobileNavigation,
} from '@/components/MobileNavigation'
import { useMobileNavigationStore } from '@/components/MobileNavigation'
import { ThemeToggle } from '@/components/ThemeToggle'

function TopLevelNavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      >
        {children}
      </Link>
    </li>
  )
}

export const Header = forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<typeof motion.div>
>(function Header({ className, ...props }, ref) {
  let { isOpen: mobileNavIsOpen } = useMobileNavigationStore()
  let isInsideMobileNavigation = useIsInsideMobileNavigation()

  let { scrollY } = useScroll()
  let bgOpacityLight = useTransform(scrollY, [0, 72], [0.5, 0.9])
  let bgOpacityDark = useTransform(scrollY, [0, 72], [0.2, 0.8])

  return (
    <motion.div
      {...props}
      ref={ref}
      className={clsx(
        className,
        'fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80',
        !isInsideMobileNavigation &&
          'backdrop-blur-sm lg:left-72 xl:left-80 dark:backdrop-blur',
        isInsideMobileNavigation
          ? 'bg-white dark:bg-zinc-900'
          : 'bg-white/[var(--bg-opacity-light)] dark:bg-zinc-900/[var(--bg-opacity-dark)]',
      )}
      style={
        {
          '--bg-opacity-light': bgOpacityLight,
          '--bg-opacity-dark': bgOpacityDark,
        } as React.CSSProperties
      }
    >
      <div
        className={clsx(
          'absolute inset-x-0 top-full h-px transition',
          (isInsideMobileNavigation || !mobileNavIsOpen) &&
            'bg-zinc-900/7.5 dark:bg-white/7.5',
        )}
      />
      <div className="flex flex-1 w-full items-center gap-5 lg:hidden">
        <MobileNavigation />
        <Link href="/" aria-label="Home">
         <h1 className="text-2xl font-bold text-emerald-400">Vinit Sharma</h1>
        </Link>
      </div>
      <div className="flex flex-none lg:flex-1 items-center justify-between  gap-5">
        <nav className="hidden md:block">
          <span className=" flex items-center gap-8 w-max">
            {`Software Developer | Full Stack Developer | Data Analytics Graduate`}
          </span>
        </nav>
        {/* <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15" /> */}
        <div className="flex items-center justify-end w-full gap-4">
          <ThemeToggle />
        <div className="hidden min-[416px]:contents">
          <Button href="https://drive.google.com/file/d/1KuCa48Pc6-7N_irlp32t7EtSjVp9dn73/view?usp=sharing" target='_blank'>Resume</Button>
        </div>
        </div>
      </div>
    </motion.div>
  )
})
