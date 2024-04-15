import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { FiHeart, FiCompass, FiPlusSquare, FiSend, FiHome, FiSearch } from "react-icons/fi";

export function Navbar() {
  return (
    <nav className="w-screen h-16 flex items-center justify-between px-6 border-b flex-shrink gap-4">
      <div>
        <p className="text-2xl font-bold">Instant/Film</p>
      </div>
      <div className="lg:flex flex-1 items-center justify-between hidden gap-4">
        <div className="relative">
          {/* Work on this */}
          <p className="absolute top-2 left-3 text-zinc-600">
            <FiSearch size="20" />
          </p>
          <Input id="nav__searchbar" placeholder="Search" className="w-96 bg-zinc-800 pl-10" />
        </div>
        <ul className="flex gap-4">
          <li><FiHome size="24" /></li>
          <li><FiSend size="24" /></li>
          <li><FiPlusSquare size="24" /></li>
          <li><FiCompass size="24" /></li>
          <li><FiHeart size="24" /></li>
        </ul>
      </div>
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Button className="bg-green-700 text-white font-extrabold text-lg" asChild>
            <SignInButton />
          </Button>
        </SignedOut>
      </div>

    </nav>
  )
}
