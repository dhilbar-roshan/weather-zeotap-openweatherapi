import {
  Cloud,
  CloudLightning,
  CloudRain,
  CloudSnow,
  CloudFog,
  Sun,
} from "lucide-react";

interface WeatherIconProps {
  weatherId: number;
  className?: string;
}

export function WeatherIcon({ weatherId, className }: WeatherIconProps) {
  const getWeatherIcon = (id: number) => {
    if (id >= 200 && id < 300) return CloudLightning;
    if (id >= 300 && id < 600) return CloudRain;
    if (id >= 600 && id < 700) return CloudSnow;
    if (id >= 700 && id < 800) return CloudFog;
    if (id === 800) return Sun;
    return Cloud;
  };

  const Icon = getWeatherIcon(weatherId);
  return <Icon className={className} />;
}