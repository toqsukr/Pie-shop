import cn from 'clsx'
import { FC, PropsWithChildren, ReactNode } from 'react'

const ControlLayout: FC<PropsWithChildren<{ control: ReactNode; header?: ReactNode }>> = ({
  children,
  control,
  header,
}) => {
  return (
    <section
      style={{ gridTemplateColumns: '65% 1fr', gridTemplateRows: '100%' }}
      className='h-full grid gap-12 pr-12'>
      <div className='h-full pl-12 flex flex-col bg-background'>
        <header className={cn('py-5', { ['border-b border-light-gray border-solid']: !!header })}>
          {header}
        </header>
        <div className='flex-1 pt-5 pb-10 overflow-auto'>{children}</div>
      </div>
      <div className='py-10'>
        <div className='h-full py-6 shadow rounded-3xl'>{control}</div>
      </div>
    </section>
  )
}

export default ControlLayout
