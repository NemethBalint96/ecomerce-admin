"use client"

import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { useParams, useRouter } from "next/navigation"
import { ServiceColumn, columns } from "./columns"
import { DataTable } from "@/components/ui/data-table"

interface SizesClientProps {
  data: ServiceColumn[]
}

const ServicesClient: React.FC<SizesClientProps> = ({ data }) => {
  const router = useRouter()
  const params = useParams()

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Services (${data.length})`}
          description="Manage services"
        />
        <Button onClick={() => router.push(`/${params.storeId}/services/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
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
