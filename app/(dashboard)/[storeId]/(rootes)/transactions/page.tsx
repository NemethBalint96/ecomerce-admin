import { format } from "date-fns"
import prismadb from "@/lib/prismadb"
import ServicesClient from "./components/client"
import { TransactionColumn } from "./components/columns"
import { auth } from "@clerk/nextjs"
import { Transaction } from "@prisma/client"

const TransactionsPage = async ({ params }: { params: { storeId: string } }) => {
  let transactions: Transaction[] = []

  const { userId } = auth()

  if (userId) {
    transactions = await prismadb.transaction.findMany({ where: { userId: userId }, orderBy: { createdAt: "desc" } })
  }

  const formattedServices: TransactionColumn[] = transactions.map((item) => ({
    id: item.id,
    name: item.name,
    price: item.price,
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
