"use client"

import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { useParams, useRouter } from "next/navigation"
import { TransactionColumn, columns } from "./columns"
import { DataTable } from "@/components/ui/data-table"

interface IncomeClientProps {
  data: TransactionColumn[]
}

const ServicesClient: React.FC<IncomeClientProps> = ({ data }) => {
  const router = useRouter()
  const params = useParams()

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Transactions (${data.length})`}
          description="Manage transactions"
        />
      </div>
      <Separator />
      <DataTable
        columns={columns}
        data={data}
        searchKey="name"
      />
    </>
  )
}

export default ServicesClient
