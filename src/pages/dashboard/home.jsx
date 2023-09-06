import React from "react";
import { Typography } from "@material-tailwind/react";
import { ClockIcon } from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import { statisticsCardsData, statisticsChartsData } from "@/data";

export function Home() {
  return (
    <div className="mt-12">
      <h1 className="text-center text-4xl font-medium">
        Admin panelga hush kelibsiz
      </h1>
    </div>
  );
}

export default Home;
