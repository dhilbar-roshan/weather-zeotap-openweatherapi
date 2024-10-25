import { Card } from "@/components/ui/card";
import { WeatherIcon } from "./WeatherIcon";
import { WeatherData } from "@/lib/types/weather";

interface WeatherCardProps {
  weather: WeatherData;
}

export function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <Card className="p-6">
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <div className="flex items-center gap-4">
          <WeatherIcon
            weatherId={weather.weather[0].id}
            className="h-16 w-16 text-primary"
          />
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
  );
}