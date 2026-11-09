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
        <IconBackground className="bg-white size-[30px]">
            <UserRound className="size-[16px]"/>
        </IconBackground>
    )
}