import React, { useState } from 'react';
import { ArrowUpCircle } from "@geist-ui/icons";

type Props = {}

export default function BackToTop({}: Props) {
  const isBrowser = () => typeof window !== 'undefined' //The approach recommended by Next.js
  const [visible, setVisible] = useState(false)

  const scrollToTop = () => {
    if (!isBrowser()) return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }
  if (isBrowser()) {
    window.addEventListener('scroll', toggleVisible)
  }

  return (
    <button
      className="nx-text-xs flex items-center gap-2 nx-font-medium nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100 contrast-more:nx-text-gray-800 contrast-more:dark:nx-text-gray-50"
      onClick={scrollToTop}
      style={{ display: visible ? 'inline-flex' : 'none', paddingTop: '24px' }}
      children={
        <>
          <ArrowUpCircle size={20} style={{ marginRight: '10px' }} />
          <span style={{ marginLeft: '10px' }}>Back to top</span>
        </>
      }
    />
  )
}
