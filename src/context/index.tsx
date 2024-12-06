import { ReactNode } from "react"
import { AuthProvider } from "./auth"
import { TransactionProvider } from "./transaction"


interface AppProviderProps{
    children: ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => {
    return(
        <AuthProvider>
            <TransactionProvider>
                {children}
            </TransactionProvider>
        </AuthProvider>
    )
}

export default AppProvider