import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"

const SetupPage = () => {
  return (
    <div>
      <p>Hello Admin Dashboard</p>
      <p>This is a protected route!</p>
      <UserButton afterSignOutUrl="/" />
      <Button
        size="sm"
        variant="destructive"
      >
        Click Me
      </Button>
    </div>
  )
}

export default SetupPage
