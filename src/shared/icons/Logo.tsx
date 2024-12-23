import { FC } from 'react'
import { IconProp } from './Icon.type'

const Logo: FC<IconProp> = props => {
  return (
    <svg
      {...props}
      width='53'
      height='53'
      viewBox='0 0 53 53'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M44.5727 18.8902C40.3081 8.62079 28.4098 3.78803 18.1921 8.17505C8.0958 12.51 3.39026 24.095 7.60425 34.2424C9.73657 39.3771 13.3436 42.4302 18.1284 44.3737C19.93 42.6403 25.275 26.5609 26.0885 26.5663C26.9021 26.5716 32.7378 42.9714 34.2935 44.2501C44.3898 39.9152 48.7867 29.0376 44.5727 18.8902Z'
        fill='currentColor'
      />
    </svg>
  )
}

export default Logo
