import { Button } from "@/components/ui/button"
import { ServiceColumn } from "./columns"
import { Plus } from "lucide-react"

interface CreateTransactionProps {
  data: ServiceColumn
}

const CreateTransaction: React.FC<CreateTransactionProps> = ({ data }) => {
  return (
    <Button onClick={() => {}}>
      <Plus size={20} />
    </Button>
  )
}

export default CreateTransaction
