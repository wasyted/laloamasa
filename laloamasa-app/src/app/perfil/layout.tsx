import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perfil | laloamasa",
  description: "Bienvenidos a laloamasa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-stone-50 text-stone-700`}>{children}</body>
    </html>
  );
}
