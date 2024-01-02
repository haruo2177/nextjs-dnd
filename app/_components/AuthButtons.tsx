"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

export const AuthButton = () => {
  // TODO: session provider を使用して表示を切り替える
  // if (false) {
  //   return (
  //     <>
  //       <Button onClick={() => signOut()}>Sign out</Button>
  //     </>
  //   );
  // }
  return (
    <>
      Not signed in <br />
      <Button onClick={() => signIn()}>Sign in</Button>
    </>
  );
};
