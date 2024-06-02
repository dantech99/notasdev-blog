



export const metadata = {
  title: 'Notion Next.js blog',
  description: 'Notion Next.js blog',
};

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
