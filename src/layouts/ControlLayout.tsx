import { FC, PropsWithChildren } from 'react'

const ControlLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section style={{ gridTemplateColumns: '2fr 1fr' }} className='grid gap-12'>
      {children}
      <div className='w-full bg-black'></div>
    </section>
  )
}

export default ControlLayout
