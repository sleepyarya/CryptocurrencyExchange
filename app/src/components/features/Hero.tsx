"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <div className="relative isolate pt-14 dark:bg-black">
            {/* Background gradients/blobs */}
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>

            <div className="py-24 sm:py-32 lg:pb-40">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/60"
                        >
                            The Future of Crypto Trading is Here
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-6 text-lg leading-8 text-gray-300"
                        >
                            Experience ultra-fast execution, deep liquidity, and a powerful trading engine designed for pros and beginners alike.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-10 flex items-center justify-center gap-x-6"
                        >
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 h-12 text-base shadow-[0_0_20px_-5px_var(--color-primary)]">
                                Start Trading <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base border-white/10 hover:bg-white/5 text-white">
                                View Markets
                            </Button>
                        </motion.div>
                    </div>

                    {/* Featured Stats */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-16 flow-root sm:mt-24"
                    >
                        <div className="rounded-xl bg-white/5 p-2 ring-1 ring-inset ring-white/10 lg:rounded-2xl lg:p-4">
                            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 bg-black/40 rounded-lg p-8">
                                <div className="flex flex-col gap-y-2 border-b border-white/5 pb-8 sm:border-b-0 sm:border-r sm:pb-0 text-center">
                                    <dt className="text-sm leading-6 text-gray-400">Total Volume</dt>
                                    <dd className="order-first text-3xl font-semibold tracking-tight text-white">$84.2B</dd>
                                </div>
                                <div className="flex flex-col gap-y-2 border-b border-white/5 pb-8 sm:border-b-0 sm:border-r sm:pb-0 text-center">
                                    <dt className="text-sm leading-6 text-gray-400">Verified Users</dt>
                                    <dd className="order-first text-3xl font-semibold tracking-tight text-white">2.4M+</dd>
                                </div>
                                <div className="flex flex-col gap-y-2 text-center">
                                    <dt className="text-sm leading-6 text-gray-400">Countries Supported</dt>
                                    <dd className="order-first text-3xl font-semibold tracking-tight text-white">150+</dd>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>
        </div>
    );
}
