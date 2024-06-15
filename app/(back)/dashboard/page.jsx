import React from "react";
import { getData } from "@/lib/getData";
import AnalyticsCard from "@/components/AnalyticsCard";
import LatestOrders from "@/components/LatestOrders";

export default async function page() {
  const analytics = await getData("analytics");
  // console.log(analytics);
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {analytics.map((item, i) => {
          return <AnalyticsCard key={i} item={item} />;
        })}
      </div>
      <div className="py-4 grid gap-4 md:gap-8 md:grid-cols-2 ">
        <LatestOrders />
        <LatestOrders />
      </div>
    </main>
  );
}
