import "@/app/globals.css";

import { cn } from "@/lib/utils";
import Sidebar from "./_components/Sidebar";
import Link from "next/link";
import { AuthButton } from "./_components/AuthButtons";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-blue-500 text-white flex justify-between items-center p-4">
            <Link href="/">アプリタイトル</Link>
            <AuthButton />
          </header>
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 p-4">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
};
export default RootLayout;
