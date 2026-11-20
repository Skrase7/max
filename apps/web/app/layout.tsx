import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="p-20 bg-amber-50">{children}</div>
      </body>
    </html>
  );
}
