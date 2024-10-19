import SidePanel from '@/features/side-panel/SidePanel'
import { FC, PropsWithChildren } from 'react'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className='h-full flex'>
      <SidePanel />
      <div className='flex-1 p-12 pb-0 bg-background overflow-auto'>{children}</div>
    </main>
  )
}

export default MainLayout
