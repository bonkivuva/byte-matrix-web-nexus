import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const dark = resolvedTheme === "dark";
  const label = dark ? "Switch to light mode" : "Switch to dark mode";
  return <Tooltip><TooltipTrigger asChild><Button variant="ghost" size="icon" onClick={() => setTheme(dark ? "light" : "dark")} aria-label={label}><Sun className="hidden dark:block" /><Moon className="block dark:hidden" /></Button></TooltipTrigger><TooltipContent>{label}</TooltipContent></Tooltip>;
};
export default ThemeToggle;
