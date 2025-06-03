import "./styles/globals.css";
import "./styles/tokens.css";

import { SiteHeader } from "@/components/SiteHeader/SiteHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
