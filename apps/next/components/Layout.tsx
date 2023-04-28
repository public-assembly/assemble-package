import * as React from 'react'

export function Layout({ children }) {
  return (
    <div className="max-w-[1240px] m-auto px-4 gap-8 flex flex-col">
      {children}
    </div>
  )
}
