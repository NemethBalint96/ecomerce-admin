import prismadb from "@/lib/prismadb"
import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    const body = await req.json()

    if (!userId) {
      return new NextResponse("Unathenticated", { status: 401 })
    }

    const { id } = body

    if (!id) {
      return new NextResponse("Service Id is required", { status: 400 })
    }

    const income = await prismadb.income.create({ data: { serviceId: id } })

    return NextResponse.json(income)
  } catch (error) {
    console.log("[INCOME_POST]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}

export async function GET() {
  try {
    const { userId } = auth()

    if (!userId) {
      return new NextResponse("Unathenticated", { status: 401 })
    }

    const incomes = await prismadb.income.findMany({ where: { service: { userId: userId } } })

    return NextResponse.json(incomes)
  } catch (error) {
    console.log("[INCOME_GET]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}
