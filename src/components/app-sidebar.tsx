"use client"

import * as React from "react"
import { usePathname, useRouter } from "next/navigation"
import { ChevronDown, LayoutDashboard, Map, MapPin, Settings } from "lucide-react"
import locations from "@/data/locations.json"
import { useMapContext } from "@/lib/map-context"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const navItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Map", url: "/map", icon: Map },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  const router = useRouter()
  const [locationsOpen, setLocationsOpen] = React.useState(true)
  const { selectedLocationId, setSelectedLocationId } = useMapContext()

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<a href="/" />}>
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <MapPin className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Interactive Map</span>
                <span className="truncate text-xs text-muted-foreground">Explore San Andreas</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  render={<a href={item.url} />}
                  isActive={pathname === item.url}
                  tooltip={item.title}
                >
                  <item.icon />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Locations"
                onClick={() => setLocationsOpen((o) => !o)}
              >
                <MapPin />
                <span>Locations</span>
                <ChevronDown
                  className={`ml-auto transition-transform duration-200 ${locationsOpen ? "rotate-180" : ""}`}
                />
              </SidebarMenuButton>
              {locationsOpen && (
                <SidebarMenuSub>
                  {locations.map((loc) => (
                    <SidebarMenuSubItem key={loc.id}>
                      <SidebarMenuSubButton
                        isActive={selectedLocationId === loc.id}
                        onClick={() => {
                          setSelectedLocationId(loc.id)
                          router.push("/map")
                        }}
                      >
                        <span>{loc.name}</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              )}
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              render={<a href="/settings" />}
              isActive={pathname === "/settings"}
              tooltip="Settings"
            >
              <Settings />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
