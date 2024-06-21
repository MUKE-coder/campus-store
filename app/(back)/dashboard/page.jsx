import AnalyticsCard from "@/components/AnalyticsCard";
import DashboardCharts from "@/components/backoffice/DashboardCharts";
import FarmerDashboard from "@/components/backoffice/FarmerDashboard";
import Heading from "@/components/backoffice/Heading";
import LargeCards from "@/components/backoffice/LargeCards";
import SmallCards from "@/components/backoffice/SmallCards";
import UserDashboard from "@/components/backoffice/UserDashboard";
import { authOptions } from "@/lib/authOptions";
import { getData } from "@/lib/getData";
import { getServerSession } from "next-auth";
import React from "react";

export default async function page() {
  const session = await getServerSession(authOptions);
  const role = session?.user?.role;
  const sales = await getData("sales");
  const orders = await getData("orders");
  const products = await getData("products");
  const analytics = await getData("analytics");
  if (role === "USER") {
    return <UserDashboard />;
  }
  if (role === "FARMER") {
    return <FarmerDashboard />;
  }
  return (
    <div>
      <Heading title="Dashboard Overview" />
      {/* Large Cards */}
      <div className="grid gap-4 mt-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {analytics.map((item, i) => {
          return <AnalyticsCard key={i} item={item} />;
        })}
      </div>
      <LargeCards sales={sales} />
      {/* Small cards */}
      {/* <SmallCards orders={orders} /> */}
      {/* Charts */}
      {/* <DashboardCharts sales={sales} /> */}
      {/* Recent Orders Table */}
    </div>
  );
}
