import SidePanel from '@/features/side-panel/SidePanel'
import { FC, PropsWithChildren } from 'react'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className='h-full w-full flex'>
      <SidePanel />
      <div style={{ width: 'calc(100% - 125px)' }} className='h-full'>
        {children}
      </div>
    </main>
  )
}

export default MainLayout
