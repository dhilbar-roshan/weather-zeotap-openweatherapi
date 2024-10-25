"use client";

import { WeatherData } from "@/lib/types/weather";
import { WeatherCard } from "./WeatherCard";
import { WeatherStats } from "./WeatherStats";

interface WeatherDisplayProps {
  weather: WeatherData | null;
}

export function WeatherDisplay({ weather }: WeatherDisplayProps) {
  if (!weather?.weather?.length) {
    return null;
  }

  return (
    <div className="space-y-4">
      <WeatherCard weather={weather} />
      <WeatherStats weather={weather} />
    </div>
  );
}