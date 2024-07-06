export const metadata = {
  title: {
    // %s will be replaced by the page title
    template: '%s - Orian',
    default: '¡Bienvenido a Orian!',
  },
  description: 'Soporte a las inversiones.',
  keywords: 'ADD KEYWORDS',
  authors: [
    { name: 'Bruno Bagnato' },
    { name: 'Julian Di Rocco' },
    { name: 'Micaela Estrella' },
    { name: 'Ciro Tello' },
    { name: 'Dylan Tintenfich' },
  ],
  // openGraph: {
  //   title: 'Orian',
  //   description: 'Soporte a las inversiones',
  //   url: '',
  //   siteName: 'Orian',
  //   // images: [
  //   //   {
  //   //     url: 'https://nextjs.org/og.png', // Must be an absolute URL
  //   //     width: 800,
  //   //     height: 600,
  //   //   },
  //   //   {
  //   //     url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
  //   //     width: 1800,
  //   //     height: 1600,
  //   //     alt: 'My custom alt',
  //   //   },
  //   // ],
  //   locale: 'es_ES',
  // },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
};