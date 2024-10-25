import { Card } from "@/components/ui/card";
import { Thermometer, Droplets, Wind } from "lucide-react";
import { WeatherData } from "@/lib/types/weather";

interface WeatherStatsProps {
  weather: WeatherData;
}

export function WeatherStats({ weather }: WeatherStatsProps) {
  const stats = [
    {
      icon: Thermometer,
      label: "Feels Like",
      value: `${Math.round(weather.main.feels_like)}°C`,
    },
    {
      icon: Droplets,
      label: "Humidity",
      value: `${weather.main.humidity}%`,
    },
    {
      icon: Wind,
      label: "Wind Speed",
      value: `${Math.round(weather.wind.speed)} m/s`,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="p-6">
          <div className="flex items-center gap-4">
            <stat.icon className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="text-2xl font-semibold">{stat.value}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}