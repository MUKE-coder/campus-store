import { authOptions } from "@/lib/authOptions";
import { getData } from "@/lib/getData";
import { getServerSession } from "next-auth";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import AnalyticsCard from "@/components/back-end/AnalyticsCard";
import Heading from "@/components/back-end/Heading";
import LargeCards from "@/components/back-end/LargeCards";
import UserDashboard from "@/components/back-end/UserDashboard";
import ActionColumn from "@/components/DataTable/ActionColumn";
import { getAllInActiveProducts, getOutOfStockProducts } from "@/actions/getOutOfstockPrdts";
import Link from "next/link";
export const revalidate = 60; 

export default async function page() {
  const session = await getServerSession(authOptions);
  const outOfStock:any = await getOutOfStockProducts();
  const inactiveStock:any = await getAllInActiveProducts();
  const role = session?.user?.role;
  const sales = await getData("sales");
  const analytics = await getData("analytics");
  if (role === "USER") {
    return <UserDashboard />;
  }

  return (
    <div className="md:pt-[3rem] pt-[2rem] lg:pt-[3.2rem]">
      <Heading title="Dashboard Overview" />
      {/* Large Cards */}
      <div className="grid gap-4 mt-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {analytics?.map((item:any, i:any) => {
          return <AnalyticsCard key={i} item={item} />;
        })}
      </div>
      <LargeCards sales={sales} />


    {
      outOfStock.length > 0 && (
        <div className="mt-4">
        <h2 className="font-bold">Products Out of Stock </h2>
      <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product Image</TableHead>
                  <TableHead>Product Name</TableHead>
                  <TableHead className="">Edit</TableHead>
                  <TableHead className="">price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {outOfStock?.map((advert:any, i:any) => {
                  return (
                    <TableRow key={i}>
                      <TableCell>
                      <div className="shrink-0">
                        <Image
                          src={advert?.imageUrl}
                          width={600}
                          height={600}
                          alt={`${advert?.title}`}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      </div>
                      </TableCell>

                      <TableCell>
                        <div className="font-medium line-clamp-1">
                          {advert.title}
                        </div>
                      </TableCell>

                      <TableCell className="">
                      <Link href={`/dashboard/products/update/${advert.id}`}>Edit Stock</Link>
                      </TableCell>

                      <TableCell className="">
                        ${advert?.productPrice.toLocaleString("en-US")}
                      </TableCell>


                      <TableCell className="">
                      <ActionColumn
                        row={1}
                         title="Product"
                         editEndpoint={`products/update/${advert.id}`}
                         endpoint={`products/${advert.id}`}
                       />
                      </TableCell>
                    
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
      </div>
      )
    }
    {
      inactiveStock.length > 0 && (
        <div className="mt-4">
        <h2 className="font-bold">In Active Stock </h2>
      <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product Image</TableHead>
                  <TableHead>Product Name</TableHead>
                  <TableHead className="">Edit</TableHead>
                  <TableHead className="">price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {inactiveStock?.map((advert:any, i:any) => {
                  return (
                    <TableRow key={i}>
                      <TableCell>
                      <div className="shrink-0">
                        <Image
                          src={advert?.imageUrl}
                          width={600}
                          height={600}
                          alt={`${advert?.title}`}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      </div>
                      </TableCell>

                      <TableCell>
                        <div className="font-medium line-clamp-1">
                          {advert.title}
                        </div>
                      </TableCell>

                      <TableCell className="">
                      <Link href={`/dashboard/products/update/${advert.id}`}>Edit Stock</Link>
                      </TableCell>

                      <TableCell className="">
                        ${advert?.productPrice.toLocaleString("en-US")}
                      </TableCell>


                      <TableCell className="">
                      <ActionColumn
                        row={1}
                         title="Product"
                         editEndpoint={`products/update/${advert.id}`}
                         endpoint={`products/${advert.id}`}
                       />
                      </TableCell>
                    
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
      </div>
      )
    }
    </div>
  );
}
