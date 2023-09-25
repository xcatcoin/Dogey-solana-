import React from 'react'
import image from './https://i.ibb.co/wYScd5P/LOGO-WOLF.png'

export default {
  name: 'Mines',
  short_name: 'mines',
  creator: '6Fa47jDybGSpUX9vZ9NNPV7cfjox9iqUFtpifUSGaPpm',
  theme_color: 'rgb(138 102 255)',
  image,
  app: React.lazy(() => import('./Mines')),
}
