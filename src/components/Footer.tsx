'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/Button'
import { navigation } from '@/components/Navigation'

function PageLink({
  label,
  page,
  previous = false,
}: {
  label: string
  page: { href: string; title: string }
  previous?: boolean
}) {
  return (
    <>
      <Button
        href={page.href}
        aria-label={`${label}: ${page.title}`}
        variant="secondary"
        arrow={previous ? 'left' : 'right'}
      >
        {label}
      </Button>
      <Link
        href={page.href}
        tabIndex={-1}
        aria-hidden="true"
        className="text-base font-semibold text-emerald-600 transition hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-zinc-300"
      >
        {page.title}
      </Link>
    </>
  )
}

function PageNavigation() {
  let pathname = usePathname()
  let allPages = navigation.flatMap((group) => group.links)
  let currentPageIndex = allPages.findIndex((page) => page.href === pathname)

  if (currentPageIndex === -1) {
    return null
  }

  let previousPage = allPages[currentPageIndex - 1]
  let nextPage = allPages[currentPageIndex + 1]

  if (!previousPage && !nextPage) {
    return null
  }

  return (
    <div className="flex">
      {previousPage && (
        <div className="flex flex-col items-start gap-3">
          <PageLink label="Previous" page={previousPage} previous />
        </div>
      )}
      {nextPage && (
        <div className="ml-auto flex flex-col items-end gap-3">
          <PageLink label="Next" page={nextPage} />
        </div>
      )}
    </div>
  )
}

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M11.1527 8.92804L16.2525 3H15.044L10.6159 8.14724L7.07919 3H3L8.34821 10.7835L3 17H4.20855L8.88474 11.5643L12.6198 17H16.699L11.1524 8.92804H11.1527ZM9.49748 10.8521L8.95559 10.077L4.644 3.90978H6.50026L9.97976 8.88696L10.5216 9.66202L15.0446 16.1316H13.1883L9.49748 10.8524V10.8521Z" />
    </svg>
  )
}

function GitHubIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 1.667c-4.605 0-8.334 3.823-8.334 8.544 0 3.78 2.385 6.974 5.698 8.106.417.075.573-.182.573-.406 0-.203-.011-.875-.011-1.592-2.093.397-2.635-.522-2.802-1.002-.094-.246-.5-1.005-.854-1.207-.291-.16-.708-.556-.01-.567.656-.01 1.124.62 1.281.876.75 1.292 1.948.93 2.427.705.073-.555.291-.93.531-1.143-1.854-.213-3.791-.95-3.791-4.218 0-.929.322-1.698.854-2.296-.083-.214-.375-1.09.083-2.265 0 0 .698-.224 2.292.876a7.576 7.576 0 0 1 2.083-.288c.709 0 1.417.096 2.084.288 1.593-1.11 2.291-.875 2.291-.875.459 1.174.167 2.05.084 2.263.53.599.854 1.357.854 2.297 0 3.278-1.948 4.005-3.802 4.219.302.266.563.78.563 1.58 0 1.143-.011 2.061-.011 2.35 0 .224.156.491.573.405a8.365 8.365 0 0 0 4.11-3.116 8.707 8.707 0 0 0 1.567-4.99c0-4.721-3.73-8.545-8.334-8.545Z"
      />
    </svg>
  )
}

function LinkedInIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg  viewBox="0 0 24 24" {...props}>
    <path d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z" fill="#000000"/>
    </svg>
  )
}



function SocialLink({
  href,
  icon: Icon,
  children,
}: {
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <Link href={href} target='_blank' className="group">
      <span className="sr-only">{children}</span>
      <Icon className="h-5 w-5 rounded fill-zinc-700 transition group-hover:fill-emerald-900 dark:group-hover:fill-emerald-500 bg-emerald-400" />
    </Link>
  )
}

function SmallPrint() {
  return (
    <div className="flex flex-col items-center justify-between gap-5 border-t border-zinc-900/5 pt-8 sm:flex-row dark:border-white/5">
      <p className="text-xs text-zinc-600 dark:text-zinc-400">
        &copy; Copyright {new Date().getFullYear()}. All rights reserved.
      </p>
      <div className="flex gap-4">
        <SocialLink href="https://www.linkedin.com/in/vinits0804/" icon={LinkedInIcon}>
          Follow me on LinkedIn
        </SocialLink>
        <SocialLink href="https://github.com/Vinitsharma0804/" icon={GitHubIcon}>
          Follow me on GitHub
        </SocialLink>
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-2xl space-y-10 pb-16 lg:max-w-5xl">
      <PageNavigation />
      <SmallPrint />
    </footer>
  )
}
