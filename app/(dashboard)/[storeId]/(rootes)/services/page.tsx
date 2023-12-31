import { format } from "date-fns"
import prismadb from "@/lib/prismadb"
import ServicesClient from "./components/client"
import { ServiceColumn } from "./components/columns"
import { auth } from "@clerk/nextjs"
import { Service } from "@prisma/client"

const ServicesPage = async ({ params }: { params: { storeId: string } }) => {
  let services: Service[] = []

  const { userId } = auth()

  if (userId) {
    services = await prismadb.service.findMany({
      where: { userId: userId },
      orderBy: { createdAt: "desc" },
    })
  }

  const formattedServices: ServiceColumn[] = services.map((item) => ({
    id: item.id,
    name: item.name,
    price: item.price,
  }))

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ServicesClient data={formattedServices} />
      </div>
    </div>
  )
}

export default ServicesPage
