import React from 'react'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex h-[200px] w-[400px] flex-col items-center justify-center border-4 border-yellow-700 bg-yellow-500 font-bold text-white">
      <h1>Zone Danger</h1>
      {children}
    </div>
  )
}
