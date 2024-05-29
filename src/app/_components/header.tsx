import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function Header() {
  return (
    <header className="w-full border-b p-4 font-semibold">
      <nav className="flex w-full items-center justify-between">
        <div className="text-2xl">Gallery</div>

        <div className="flex items-center text-xl">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}
