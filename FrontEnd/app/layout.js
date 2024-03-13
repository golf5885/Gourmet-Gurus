import "./globals.css";
import ResponsiveAppBar from "../components/navbar/ResponsiveAppBar";
import { ClerkProvider } from '@clerk/nextjs'


export const metadata = {
  title: "Gourmet Gurus",
  description: "The One Stop Shop for UCSB Dining",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body style={{ position: "relative", minHeight: "100vh", paddingBottom: "50px" }}>
          <div style={{ marginBottom: "50px" }}>
            <ResponsiveAppBar />
            {children}
          </div>
          <footer
            className="bg-black text-center dark:bg-black lg:text-left"
            style={{
              position: "fixed",
              bottom: 0,
              width: "100%",
              zIndex: 9999,
            }}
          >
            <div className="p-4 text-left text-neutral-700 dark:text-neutral-200">
              © 2024 Copyright:
              <a
                className="text-neutral-800 dark:text-neutral-400"
                href="/about"
              > Gourmet Gurus --- About Us</a>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
