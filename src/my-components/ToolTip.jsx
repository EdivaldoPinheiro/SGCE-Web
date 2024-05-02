import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
         {
          props.container
         }
        </TooltipTrigger>
        <TooltipContent>
          <p>{props.textHover}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
