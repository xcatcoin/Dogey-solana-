import React from 'react'
import image from './https://ibb.co/wYScd5P'

export default {
  name: 'Flip',
  short_name: 'flip',
  description: `
    creator: '6Fa47jDybGSpUX9vZ9NNPV7cfjox9iqUFtpifUSGaPpm',
  `,
  image,
  theme_color: 'rgb(255 218 121)',
  app: React.lazy(() => import('./App')),
}
