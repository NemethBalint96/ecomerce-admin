import { format } from "date-fns"
import prismadb from "@/lib/prismadb"
import ServicesClient from "./components/client"
import { TransactionColumn } from "./components/columns"
import { auth } from "@clerk/nextjs"
import { Service } from "@prisma/client"

interface Transaction {
  id: string
  service: Service
  createdAt: Date
}

const TransactionsPage = async ({ params }: { params: { storeId: string } }) => {
  let transactions: Transaction[] = []

  const { userId } = auth()

  if (userId) {
    transactions = await prismadb.income.findMany({
      include: { service: true },
      where: {
        service: {
          userId: userId,
        },
      },
      orderBy: { createdAt: "desc" },
    })
  }

  const formattedServices: TransactionColumn[] = transactions.map((item) => ({
    id: item.id,
    name: item.service.name,
    price: item.service.price,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }))

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ServicesClient data={formattedServices} />
      </div>
    </div>
  )
}

export default TransactionsPage
