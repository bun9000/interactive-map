"use client"

import { ReactNode } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { MapContextProvider } from "@/lib/map-context"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { usePathname } from "next/navigation"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const lastSegment = pathname.split("/").filter(Boolean).pop() || "dashboard"
  const pageName = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1)

  return (
    <MapContextProvider>
    <SidebarProvider suppressHydrationWarning>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>{pageName}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="ml-auto">
            <ThemeSwitcher />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 min-h-0">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
    </MapContextProvider>
  )
}
