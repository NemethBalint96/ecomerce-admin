import prismadb from "@/lib/prismadb"
import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"

export async function GET(req: Request, { params }: { params: { transactionId: string } }) {
  try {
    if (!params.transactionId) {
      return new NextResponse("Transaction id is required", { status: 400 })
    }

    const transaction = await prismadb.transaction.findUnique({ where: { id: params.transactionId } })

    return NextResponse.json(transaction)
  } catch (error) {
    console.log("[TRANSACTION_GET]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: { storeId: string; transactionId: string } }) {
  try {
    if (!params.transactionId) {
      return new NextResponse("Transaction id is required", { status: 400 })
    }

    const { userId } = auth()

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 })
    }

    const transaction = await prismadb.transaction.deleteMany({ where: { id: params.transactionId } })

    return NextResponse.json(transaction)
  } catch (error) {
    console.log("[TRANSACTION_DELETE]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}
