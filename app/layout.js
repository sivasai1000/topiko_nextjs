
import "./globals.css";

export const metadata = {
  title: "Topiko | Digital Business Solutions",
  description: "Topiko helps businesses build their digital identity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* === Geist Font (CDNFonts) === */}
        <link href="https://fonts.cdnfonts.com/css/geist" rel="stylesheet" />

        {/* === Inter (Google Font) === */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* === Anek Latin (Google Font) === */}
        <link
          href="https://fonts.googleapis.com/css2?family=Anek+Latin:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* === Conthrax (CDNFonts) === */}
        <link href="https://fonts.cdnfonts.com/css/conthrax" rel="stylesheet" />
      </head>

      <body className="font-geist bg-[radial-gradient(50%_50%_at_50%_50%,#1E2227_0%,#14181E_100%)] text-white">
        {children}
      </body>
    </html>
  );
}
