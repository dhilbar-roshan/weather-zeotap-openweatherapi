"use client";

import { Card } from "@/components/ui/card";
import {
  Cloud,
  Droplets,
  Wind,
  Thermometer,
  CloudRain,
  Sun,
  CloudSnow,
  CloudLightning,
  CloudFog,
} from "lucide-react";

interface WeatherData {
  weather: Array<{
    id: number;
    description: string;
  }>;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  name: string;
}

interface WeatherDisplayProps {
  weather: WeatherData;
}

const getWeatherIcon = (weatherId: number) => {
  if (weatherId >= 200 && weatherId < 300) return CloudLightning;
  if (weatherId >= 300 && weatherId < 600) return CloudRain;
  if (weatherId >= 600 && weatherId < 700) return CloudSnow;
  if (weatherId >= 700 && weatherId < 800) return CloudFog;
  if (weatherId === 800) return Sun;
  return Cloud;
};

export default function WeatherDisplay({ weather }: WeatherDisplayProps) {
  if (!weather || !weather.weather) {
    return null;
  }

  const WeatherIcon = getWeatherIcon(weather.weather[0].id);

  return (
    <div className="space-y-4">
      <Card className="p-6">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <div className="flex items-center gap-4">
            <WeatherIcon className="h-16 w-16 text-primary" />
            <div>
              <h2 className="text-3xl font-bold">{weather.name}</h2>
              <p className="text-xl text-muted-foreground">
                {weather.weather[0].description}
              </p>
            </div>
          </div>
          <div className="text-4xl font-bold">
            {Math.round(weather.main.temp)}°C
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Thermometer className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Feels Like</p>
              <p className="text-2xl font-semibold">
                {Math.round(weather.main.feels_like)}°C
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Droplets className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Humidity</p>
              <p className="text-2xl font-semibold">{weather.main.humidity}%</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Wind className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Wind Speed</p>
              <p className="text-2xl font-semibold">
                {Math.round(weather.wind.speed)} m/s
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}