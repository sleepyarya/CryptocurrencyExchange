import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Wallet, Bell, Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/60 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                        >
                            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5c0-5 5-5 5-5" />
                            <path d="M8.5 8.5C7 9.5 6 11 6 13a6 6 0 0 0 6 6 6 6 0 0 0 6-6" />
                        </svg>
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                        CryptoX
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                        Markets
                    </Link>
                    <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                        Exchange
                    </Link>
                    <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                        Earn
                    </Link>
                    <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                        NFT
                    </Link>
                </div>

                {/* Search & Actions */}
                <div className="hidden items-center gap-4 md:flex">
                    <div className="relative w-64">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search coin..."
                            className="h-9 w-full rounded-full border-white/5 bg-white/5 pl-9 text-sm focus-visible:ring-primary/20"
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-muted-foreground hover:text-foreground">
                            <Bell className="h-4 w-4" />
                        </Button>
                        <Button className="h-9 gap-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20">
                            <Wallet className="h-4 w-4" />
                            <span>Connect Wallet</span>
                        </Button>
                        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full bg-white/5">
                            <User className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className="flex items-center gap-4 md:hidden">
                    <Button variant="ghost" size="icon">
                        <Search className="h-5 w-5" />
                    </Button>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="border-l-white/10 bg-black/95 backdrop-blur-xl">
                            <div className="mt-8 flex flex-col gap-4">
                                <Link href="#" className="text-lg font-medium">Markets</Link>
                                <Link href="#" className="text-lg font-medium">Exchange</Link>
                                <Link href="#" className="text-lg font-medium">Earn</Link>
                                <Link href="#" className="text-lg font-medium">NFT</Link>
                                <hr className="border-white/10" />
                                <Button className="w-full gap-2 rounded-full">
                                    <Wallet className="h-4 w-4" />
                                    Connect Wallet
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
