import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { GlobalStyle } from "./styles/global";
import { createServer, Model } from "miragejs";

createServer({
    models: {
        transaction: Model,
    },

    seeds(server) {
        server.db.loadData({
            transactions:
                localStorage.getItem("dt-transactions") !== null
                    ? JSON.parse(
                          String(localStorage.getItem("dt-transactions"))
                      )
                    : [],
        });
    },

    routes() {
        this.namespace = "api";

        this.get("/transactions", () => {
            return this.schema.all("transaction");
        });

        this.post("/transactions", (schema, request) => {
            const data = JSON.parse(request.requestBody);

            const listTransactions = schema.all("transaction").models;

            if (listTransactions.length > 0) {
                listTransactions.push(data);
                localStorage.setItem(
                    "dt-transactions",
                    JSON.stringify(listTransactions)
                );
            } else {
                localStorage.setItem("dt-transactions", JSON.stringify([data]));
            }

            return schema.create("transaction", data);
        });
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>
);
