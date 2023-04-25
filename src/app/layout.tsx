import HomeLayout from '@/components/layouts/HomeLayout';
import './globals.css';

export const metadata = {
  title: 'Next.js + Three.js',
  description: 'A minimal starter for Nextjs + React-three-fiber and Threejs.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen max-w-[1920px] w-full">
        <HomeLayout>{children}</HomeLayout>
      </body>
    </html>
  );
}
