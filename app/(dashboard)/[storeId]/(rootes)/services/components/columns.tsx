"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action"
import CreateTransaction from "./create-transaction"

export type ServiceColumn = {
  id: string
  name: string
  price: number
}

export const columns: ColumnDef<ServiceColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
  {
    id: "transaction",
    cell: ({ row }) => <CreateTransaction data={row.original} />,
  },
]
