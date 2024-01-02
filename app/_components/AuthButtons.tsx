"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut } from "next-auth/react";

export const LogOutButton = () => {
  return <Button onClick={() => signOut()}>Sign out</Button>;
};

export const LogInButton = () => {
  return <Button onClick={() => signIn()}>Sign in</Button>;
};
