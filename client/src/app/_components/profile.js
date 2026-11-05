import IconBackground from "@/app/_components/icon_background"
import { 
    UserRound
 } from 'lucide-react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  
} from "@/components/ui/input-group"
export default function Profile() {
    return (
        <IconBackground>
            <UserRound className="size-[16px]"/>
        </IconBackground>
    )
}