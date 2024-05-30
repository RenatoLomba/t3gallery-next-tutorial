"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { UploadButton } from "../../utils/uploadthing";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();

  return (
    <header className="w-full border-b p-4 font-semibold">
      <nav className="flex w-full items-center justify-between">
        <div className="text-2xl">Gallery</div>

        <div className="flex flex-row items-center text-xl">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={() => {
                router.refresh();
              }}
            />
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}
