import { createContext, ReactNode, useContext } from "react";
import { useEffect, useState } from "react";
import { Api } from "../services/api";

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: TransactionProps[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

interface TransactionProps {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

type TransactionInput = Omit<TransactionProps, "id" | "createdAt">;

const TransactionsContext = createContext({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<TransactionProps[]>([]);

    useEffect(() => {
        return () => {
            Api.get("/transactions").then((response) =>
                setTransactions(response.data.transactions)
            );
        };
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await Api.post("/transactions", {
            ...transactionInput,
            createdAt: new Date(),
        });
        const { transaction } = await response.data;

        setTransactions((prevTransaction) => [...prevTransaction, transaction]);
    }

    return (
        <TransactionsContext.Provider
            value={{ transactions, createTransaction }}
        >
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransactions() {
    const context = useContext(TransactionsContext);

    return context;
}
