"use client";
// import { useRouter } from "next/router";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export default function CustomBreadCrumb() {
  const router = useRouter();
  const { pathname } = router;

  // Split the pathname into segments
  const pathSegments = pathname.split("/").filter(Boolean);

  // Generate breadcrumb items based on the path segments
  const breadcrumbItems = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
    const isLast = index === pathSegments.length - 1;

    return (
      <React.Fragment key={href}>
        <BreadcrumbItem>
          {isLast ? (
            <BreadcrumbPage>{segment}</BreadcrumbPage>
          ) : (
            <BreadcrumbLink href={href}>{segment}</BreadcrumbLink>
          )}
        </BreadcrumbItem>
        {!isLast && <BreadcrumbSeparator />}
      </React.Fragment>
    );
  });

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {breadcrumbItems}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
