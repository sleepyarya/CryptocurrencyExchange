"use client";

import { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { LiveNumber } from "@/components/ui/live-number";
import { ArrowUpRight, ArrowDownRight, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface CryptoAsset {
    id: string;
    name: string;
    symbol: string;
    price: number;
    change24h: number;
    volume: number;
    marketCap: number;
    icon: string;
}

const INITIAL_DATA: CryptoAsset[] = [
    { id: "1", name: "Bitcoin", symbol: "BTC", price: 64231.45, change24h: 2.4, volume: 34500000000, marketCap: 1200000000000, icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png" },
    { id: "2", name: "Ethereum", symbol: "ETH", price: 3452.12, change24h: -1.2, volume: 15400000000, marketCap: 400000000000, icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png" },
    { id: "3", name: "Solana", symbol: "SOL", price: 145.67, change24h: 5.8, volume: 4500000000, marketCap: 65000000000, icon: "https://cryptologos.cc/logos/solana-sol-logo.png" },
    { id: "4", name: "Binance Coin", symbol: "BNB", price: 589.34, change24h: 0.5, volume: 1200000000, marketCap: 87000000000, icon: "https://cryptologos.cc/logos/bnb-bnb-logo.png" },
    { id: "5", name: "Cardano", symbol: "ADA", price: 0.45, change24h: -0.8, volume: 450000000, marketCap: 16000000000, icon: "https://cryptologos.cc/logos/cardano-ada-logo.png" },
];

export function MarketTable() {
    const [data, setData] = useState<CryptoAsset[]>(INITIAL_DATA);

    useEffect(() => {
        const interval = setInterval(() => {
            setData((currentData) =>
                currentData.map((coin) => ({
                    ...coin,
                    price: coin.price * (1 + (Math.random() * 0.002 - 0.001)), // Random fluctuation ±0.1%
                    change24h: coin.change24h + (Math.random() * 0.1 - 0.05),
                }))
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-md">
            <div className="p-6">
                <h2 className="text-xl font-bold">Market Trends</h2>
                <p className="text-sm text-muted-foreground">Real-time prices and volume</p>
            </div>
            <Table>
                <TableHeader>
                    <TableRow className="border-white/5 hover:bg-white/5">
                        <TableHead className="w-[50px]"></TableHead>
                        <TableHead>Asset</TableHead>
                        <TableHead className="text-right">Price</TableHead>
                        <TableHead className="text-right">24h Change</TableHead>
                        <TableHead className="text-right hidden md:table-cell">Market Cap</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((coin) => (
                        <TableRow key={coin.id} className="border-white/5 hover:bg-white/5 group transition-colors">
                            <TableCell>
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src={coin.icon} alt={coin.name} />
                                    <AvatarFallback>{coin.symbol[0]}</AvatarFallback>
                                </Avatar>
                            </TableCell>
                            <TableCell>
                                <div className="flex flex-col">
                                    <span className="font-medium group-hover:text-primary transition-colors">{coin.name}</span>
                                    <span className="text-xs text-muted-foreground">{coin.symbol}</span>
                                </div>
                            </TableCell>
                            <TableCell className="text-right font-medium">
                                $<LiveNumber value={coin.price} />
                            </TableCell>
                            <TableCell className="text-right">
                                <div className={`flex items-center justify-end gap-1 ${coin.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                    {coin.change24h >= 0 ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                                    <LiveNumber value={Math.abs(coin.change24h)} suffix="%" />
                                </div>
                            </TableCell>
                            <TableCell className="text-right hidden md:table-cell text-muted-foreground">
                                ${(coin.marketCap / 1000000000).toFixed(2)}B
                            </TableCell>
                            <TableCell className="text-right">
                                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-white/10 opacity-0 group-hover:opacity-100 transition-all">
                                    <MoreHorizontal className="h-4 w-4" />
                                </Button>
                                <Button size="sm" variant="outline" className="ml-2 h-8 border-primary/20 hover:bg-primary/10 hover:text-primary">
                                    Trade
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
