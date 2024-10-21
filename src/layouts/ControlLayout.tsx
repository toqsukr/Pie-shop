import { FC, PropsWithChildren, ReactNode } from 'react'

const ControlLayout: FC<PropsWithChildren<{ control: ReactNode }>> = ({ children, control }) => {
  return (
    <section
      style={{ gridTemplateColumns: '65% 1fr', gridTemplateRows: '100%' }}
      className='h-full grid gap-12 px-12'>
      <div className='h-full px-1 py-10 bg-background overflow-auto'>{children}</div>
      <div className='h-full py-10 shadow'>{control}</div>
    </section>
  )
}

export default ControlLayout
