import { 
    SearchIcon, 
 } from 'lucide-react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  
} from "@/components/ui/input-group"
export default function SearchBar() {

    return (
        <InputGroup className="sm:w-75 border-none shadow-none bg-rprimary rounded-full">
            <InputGroupInput id="inline-start-input" placeholder="Search..." />
            <InputGroupAddon align="inline-start">
                <SearchIcon className="text-muted-foreground" />
            </InputGroupAddon>
        </InputGroup>
    )
}