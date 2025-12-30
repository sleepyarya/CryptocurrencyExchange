"use client";

import { useEffect, useRef } from "react";
import { createChart, ColorType, IChartApi, CandlestickSeries, CandlestickData, Time } from "lightweight-charts";

export function PriceChart() {
    const chartContainerRef = useRef<HTMLDivElement>(null);
    const chartRef = useRef<IChartApi | null>(null);

    useEffect(() => {
        if (!chartContainerRef.current) return;

        const handleResize = () => {
            chartRef.current?.applyOptions({ width: chartContainerRef.current!.clientWidth });
        };

        const chart = createChart(chartContainerRef.current, {
            layout: {
                background: { type: ColorType.Solid, color: "transparent" },
                textColor: "#a1a1aa", // zinc-400
            },
            width: chartContainerRef.current.clientWidth,
            height: 400,
            grid: {
                vertLines: { color: "rgba(255, 255, 255, 0.05)" },
                horzLines: { color: "rgba(255, 255, 255, 0.05)" },
            },
            rightPriceScale: {
                borderColor: "rgba(255, 255, 255, 0.1)",
            },
            timeScale: {
                borderColor: "rgba(255, 255, 255, 0.1)",
            },
        });

        chartRef.current = chart;

        const candlestickSeries = chart.addSeries(CandlestickSeries, {
            upColor: "#4ade80", // green-400
            downColor: "#f87171", // red-400
            borderVisible: false,
            wickUpColor: "#4ade80",
            wickDownColor: "#f87171",
        });

        // Generate sample data
        const data: CandlestickData<Time>[] = [];
        let time = new Date("2024-01-01").getTime() / 1000;
        let open = 64000;

        for (let i = 0; i < 100; i++) {
            const volatility = 500;
            const close = open + (Math.random() - 0.5) * volatility;
            const high = Math.max(open, close) + Math.random() * volatility * 0.5;
            const low = Math.min(open, close) - Math.random() * volatility * 0.5;

            data.push({
                time: time as Time,
                open,
                high,
                low,
                close,
            });

            open = close;
            time += 24 * 60 * 60; // Add one day
        }

        candlestickSeries.setData(data);

        // Simulate real-time updates
        const interval = setInterval(() => {
            const lastCandle = data[data.length - 1];
            const lastClose = lastCandle.close;
            const volatility = 100;

            const newClose = lastClose + (Math.random() - 0.5) * volatility;

            const updatedCandle: CandlestickData<Time> = {
                time: lastCandle.time,
                open: lastCandle.open,
                high: Math.max(lastCandle.high, newClose),
                low: Math.min(lastCandle.low, newClose),
                close: newClose,
            };

            candlestickSeries.update(updatedCandle);
            data[data.length - 1] = updatedCandle;
        }, 1000);

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            clearInterval(interval);
            chart.remove();
        };
    }, []);

    return (
        <div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-4">
            <div className="mb-4 flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold">BTC/USD</h2>
                    <p className="text-sm text-muted-foreground">Bitcoin Price Chart</p>
                </div>
                <div className="flex gap-2">
                    {['1H', '4H', '1D', '1W'].map((tf) => (
                        <button key={tf} className="px-3 py-1 text-xs font-medium rounded-md hover:bg-white/10 text-muted-foreground hover:text-white transition-colors">
                            {tf}
                        </button>
                    ))}
                </div>
            </div>
            <div ref={chartContainerRef} className="w-full" />
        </div>
    );
}
