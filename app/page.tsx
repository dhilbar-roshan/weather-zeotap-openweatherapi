"use client";

import { useState } from "react";
import { Cloud, Droplets, Wind, Thermometer } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { WeatherData } from "@/lib/types/weather";
import { SearchForm } from "@/components/weather/SearchForm";
import { WeatherDisplay } from "@/components/weather/WeatherDisplay";

const API_KEY = "0e6fad93ae6784ceb98ba59ff4d22eed"; // Replace with your OpenWeather API key

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSearch = async (city: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      console.log(data)

      if (data.cod === "404") {
        throw new Error("City not found");
      }

      setWeather(data);
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to fetch weather data",
        variant: "destructive",
      });
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Weather Forecast</h1>
          <p className="text-muted-foreground">
            Enter a city name to get the current weather conditions
          </p>
        </div>

        <SearchForm onSearch={handleSearch} isLoading={loading} />
        <WeatherDisplay weather={weather} />

        {!weather && !loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {[
              {
                icon: Cloud,
                title: "Weather Conditions",
                description: "Detailed weather information",
              },
              {
                icon: Thermometer,
                title: "Temperature",
                description: "Current and feels like",
              },
              {
                icon: Droplets,
                title: "Humidity",
                description: "Atmospheric humidity levels",
              },
              {
                icon: Wind,
                title: "Wind Speed",
                description: "Current wind conditions",
              },
            ].map((feature) => (
              <Card key={feature.title} className="p-6 text-center">
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}