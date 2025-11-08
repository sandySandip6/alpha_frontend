import './globals.css'

export const metadata = {
  title: 'SmileCare Dental Clinic - Your Perfect Smile Partner',
  description: 'Professional dental care services including general dentistry, cosmetic dentistry, orthodontics, and more. Book your appointment today!',
  icons: {
    icon: '/aaa.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}