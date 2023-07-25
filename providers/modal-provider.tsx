"use client"

import { useEffect, useState } from "react"
import { StoreModal } from "@/components/modals/store-modal"

export const ModalProvider = () => {
  const [isMoundted, setIsMoundted] = useState(false)

  useEffect(() => {
    setIsMoundted(true)
  }, [])

  if (!isMoundted) {
    return null
  }

  return (
    <>
      <StoreModal />
    </>
  )
}
