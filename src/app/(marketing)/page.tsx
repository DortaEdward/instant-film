import { Button } from "@/components/ui/button";
import { SignedOut, SignedIn, SignInButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <main className="flex-1 p-6 flex flex-col items-center justify-center gap-4">
      <div className="max-w-2xl text-center flex flex-col gap-2">
        <h1 className="text-4xl text-wrap">Sharing picture with friends without seeing ads has gotten really hard.</h1>
        <p className="text-2xl tracking-wider">Time we fix that</p>
      </div>
      <div>
        <SignedIn>
          <p>Redirect</p>
        </SignedIn>
        <SignedOut>
          <Button asChild className="bg-green-700 font-bold text-lg text-white">
            <SignInButton>Get Started</SignInButton>
          </Button>
        </SignedOut>
      </div>
    </main>
  );
}
