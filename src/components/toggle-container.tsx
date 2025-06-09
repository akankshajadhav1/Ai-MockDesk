import {
    Sheet,
    SheetContent,
    
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import NavigationRoute from "./navigationRoute"
  import { NavLink } from "react-router-dom"
  import { useAuth } from "@clerk/clerk-react"
  import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"

const ToggleContainer = () => {
    const {userId}=useAuth();
  return (
    <Sheet>
    <SheetTrigger className="block md:hidden"><Menu/></SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle/>
        
      </SheetHeader>
      <nav className="gap-6 flex flex-col items-start">
      <NavigationRoute isMobile/>
               {userId &&(
                <NavLink to={"/generate"} className={({isActive})=>cn("text-base text-neutral-600 " ,isActive && "text-neutral-900 font-semibold")}>
                    Take an Interview
                </NavLink>
               )}
         </nav>
    </SheetContent>
  </Sheet>
  )
}

export default ToggleContainer