import { FolderKanban } from "lucide-react"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { GWAMButton } from "./GWAMStyled"

export function EmptyProject() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderKanban />
        </EmptyMedia>
        <EmptyTitle>Select project to work on</EmptyTitle>
        <EmptyDescription>
          You have not selected a project. Please select or create a project to get started.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <GWAMButton gradient disabled>Import project from file (soon)</GWAMButton>
        </div>
      </EmptyContent>
    </Empty>
  )
}
