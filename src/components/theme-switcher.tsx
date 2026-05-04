"use client";

import { Moon, Sun, Palette } from "lucide-react";
import { useTheme } from "@/lib/theme-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeSwitcher() {
  const { themeName, mode, setThemeName, setMode } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger className="inline-flex items-center justify-center rounded-md h-9 w-9 hover:bg-accent hover:text-accent-foreground transition-colors">
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Select theme</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {(["default", "catppuccin", "marshmallow", "material", "vscode"] as const).map((name) => (
            <DropdownMenuItem
              key={name}
              onClick={() => setThemeName(name)}
              className={themeName === name ? "bg-accent" : ""}
            >
              {{ default: "Default", catppuccin: "Catppuccin", marshmallow: "Marshmallow", material: "Material Design", vscode: "VS Code" }[name]}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
      >
        <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle light/dark</span>
      </Button>
    </div>
  );
}
