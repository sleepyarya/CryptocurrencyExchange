"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/features/Hero";
import { MarketTable } from "@/components/features/MarketTable";
import { PriceChart } from "@/components/features/PriceChart";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />

      <main>
        {loading ? (
          <SkeletonHero />
        ) : (
          <Hero />
        )}

        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Chart Section - Takes up 2 columns on large screens */}
            <div className="lg:col-span-2 space-y-4">
              {loading ? (
                <Skeleton className="h-[400px] w-full rounded-xl bg-white/5" />
              ) : (
                <PriceChart />
              )}
            </div>

            {/* Market Data Section - Takes up 1 column */}
            <div className="space-y-4">
              {loading ? (
                <div className="space-y-4 rounded-xl border border-white/10 p-6 bg-black/40">
                  <Skeleton className="h-8 w-1/2 bg-white/5" />
                  <Skeleton className="h-4 w-1/3 bg-white/5" />
                  <div className="space-y-4 mt-8">
                    {[1, 2, 3, 4, 5].map(i => (
                      <div key={i} className="flex items-center gap-4">
                        <Skeleton className="h-10 w-10 rounded-full bg-white/5" />
                        <div className="space-y-2 flex-1">
                          <Skeleton className="h-4 w-20 bg-white/5" />
                          <Skeleton className="h-3 w-12 bg-white/5" />
                        </div>
                        <Skeleton className="h-4 w-16 bg-white/5" />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <MarketTable />
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black py-12 text-center text-sm text-muted-foreground">
        <p>© 2024 CryptoX Exchange. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Support</a>
        </div>
      </footer>
    </div>
  );
}

function SkeletonHero() {
  return (
    <div className="relative isolate pt-14 dark:bg-black min-h-[80vh] flex items-center justify-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="mx-auto max-w-3xl text-center space-y-8 flex flex-col items-center">
          <Skeleton className="h-16 w-3/4 rounded-lg bg-white/5" />
          <Skeleton className="h-24 w-full rounded-lg bg-white/5" />
          <div className="flex gap-4 pt-4">
            <Skeleton className="h-12 w-40 rounded-full bg-white/5" />
            <Skeleton className="h-12 w-40 rounded-full bg-white/5" />
          </div>
        </div>
      </div>
    </div>
  )
}
