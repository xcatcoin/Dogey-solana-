import React from 'react'
import image from './https://i.ibb.co/wYScd5P/LOGO-WOLF.png'

export default {
  name: 'Flip',
  short_name: 'flip',
  description: `
  Play and pray. At the top of the slot machine you can see your potential rewards. Always fair.
    creator: '6Fa47jDybGSpUX9vZ9NNPV7cfjox9iqUFtpifUSGaPpm',
  `,
  image,
  theme_color: 'rgb(255 218 121)',
  app: React.lazy(() => import('./App')),
}
