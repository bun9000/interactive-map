import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Lora,
  Fira_Code,
  Roboto,
  Merriweather,
  Source_Code_Pro,
  Source_Serif_4,
  Gabriela,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const lora = Lora({ variable: "--font-lora", subsets: ["latin"] });
const firaCode = Fira_Code({ variable: "--font-fira-code", subsets: ["latin"] });
const roboto = Roboto({ variable: "--font-roboto", weight: ["300", "400", "500", "700"], subsets: ["latin"] });
const merriweather = Merriweather({ variable: "--font-merriweather", weight: ["300", "400", "700", "900"], subsets: ["latin"] });
const sourceCodePro = Source_Code_Pro({ variable: "--font-source-code-pro", subsets: ["latin"] });
const sourceSerif4 = Source_Serif_4({ variable: "--font-source-serif-4", subsets: ["latin"] });
const gabriela = Gabriela({ variable: "--font-gabriela", weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sightseeing Map",
  description: "Track and discover sightseeing locations",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} ${firaCode.variable} ${roboto.variable} ${merriweather.variable} ${sourceCodePro.variable} ${sourceSerif4.variable} ${gabriela.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const themeName = localStorage.getItem('ui-theme-name') || 'default';
                const mode = localStorage.getItem('ui-theme-mode') || 'dark';
                document.documentElement.classList.add('theme-' + themeName);
                if (mode === 'dark' || (!mode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.add('light');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider defaultThemeName="default" defaultMode="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
