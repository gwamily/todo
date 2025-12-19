import { use } from "react"
import { AppContext, AppDispatchContext, type AppDispatch } from "@/context/app_store"

export const useProject = () => {
  const state = use(AppContext);
  if (!state) {
    throw new Error("useProject must be used within an AppContext.Provider")
  }
  return state
}

export const useProjectActions = () => {
  const actions = use(AppDispatchContext)
  if (!actions) {
    throw new Error("useProjectActions must be used within an AppDispatchContext.Provider")
  }
  return actions as AppDispatch
}