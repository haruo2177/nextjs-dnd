import "@/app/globals.css";

import { cn } from "@/lib/utils";
import Sidebar from "./_components/Sidebar";
import Link from "next/link";
import { LogInButton, LogOutButton } from "./_components/AuthButtons";
import { getServerSession } from "next-auth";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession();
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-blue-500 text-white flex justify-between items-center p-4">
            <Link href="/">アプリタイトル</Link>
            {session ? <LogOutButton /> : <LogInButton />}
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
