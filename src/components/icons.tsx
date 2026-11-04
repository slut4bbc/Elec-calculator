import type { ComponentType, SVGProps } from "react";
import {
  Bell,
  Box,
  Cable,
  Camera,
  Clock,
  Fan,
  Hammer,
  LayoutDashboard,
  Lightbulb,
  Phone,
  Ruler,
  Shield,
  Spline,
  SquareStack,
  ToggleLeft,
  TriangleAlert,
  Unplug,
} from "lucide-react";
import type { CategoryIconName } from "@/data/catalog";

const MAP: Record<CategoryIconName, ComponentType<SVGProps<SVGSVGElement>>> = {
  ruler: Ruler,
  hammer: Hammer,
  pipe: Spline,
  box: Box,
  duct: SquareStack,
  cable: Cable,
  unplug: Unplug,
  toggle: ToggleLeft,
  light: Lightbulb,
  panel: LayoutDashboard,
  shield: Shield,
  phone: Phone,
  fan: Fan,
  alert: TriangleAlert,
  camera: Camera,
  clock: Clock,
};

export function CategoryIcon({
  name,
  className,
}: {
  name: CategoryIconName;
  className?: string;
}) {
  const Icon = MAP[name] ?? Bell;
  return <Icon className={className} strokeWidth={1.75} />;
}
