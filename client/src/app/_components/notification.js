import IconBackground from "@/app/_components/icon_background"
import { 
    Bell
 } from 'lucide-react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  
} from "@/components/ui/input-group"
export default function Profile() {
    return (
        <IconBackground>
            <Bell className="size-[16px]"/>
        </IconBackground>
    )
}