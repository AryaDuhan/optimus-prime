import { createContext, useContext } from 'react'

export function getStrictContext(name) {
  const Context = createContext(undefined)

  const Provider = ({ value, children }) => (
    <Context.Provider value={value}>{children}</Context.Provider>
  )

  const useSafeContext = () => {
    const ctx = useContext(Context)
    if (ctx === undefined) {
      throw new Error(`useContext must be used within ${name ?? 'a Provider'}`)
    }
    return ctx
  }

  return [Provider, useSafeContext]
}
