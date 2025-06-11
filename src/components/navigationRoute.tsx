import { MainRoutes } from "@/lib/helpers";
import { cn } from "@/lib/utils";

import { NavLink } from "react-router-dom";

interface NavigationRouteProps {
  isMobile?: boolean;
}

const NavigationRoute = ({ isMobile = false }: NavigationRouteProps) => {
  return (
    <ul
      className={cn(
        "flex items-center gap-6 dark:text-white",
        isMobile && "items-start flex-col gap-8"
      )}
    >
      {MainRoutes.map((route) => (
        <NavLink
          key={route.href}
          to={route.href}
          className={({ isActive }) =>
            cn(
              "text-base text-neutral-600 dark:text-white ",
              isActive && "text-neutral-900 font-semibold"
            )
          }
        >
          {route.label}
        </NavLink>
      ))}
    </ul>
  );
};

export default NavigationRoute;
