import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = { title:"AgroX | Field Intelligence", description:"Autonomous agriculture robot control center" };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html> }
