import "./globals.css";
import { orbit, audiowide } from "@/fonts";
import { ThemeContextProvider } from "@/context/themeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbit.className} ${audiowide.className}`}>
      <body>
        <ThemeContextProvider>
          <main
            style={{
              maxWidth: "1200px",
              margin: "0px auto",
              padding: "0px 20px",
            }}
          >
            {children}
          </main>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
