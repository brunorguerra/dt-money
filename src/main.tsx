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
            transactions: [],
        });
    },

    routes() {
        this.namespace = "api";

        this.get("/transactions", (schema, request) => {
            const transactions = JSON.parse(
                localStorage.getItem("dt-transactions") ?? "[]"
            );

            schema.db.loadData({
                transactions,
            });

            return schema.all("transaction");
        });

        this.post("/transactions", (schema, request) => {
            const data = JSON.parse(request.requestBody);

            schema.create("transaction", data);

            localStorage.setItem(
                "dt-transactions",
                JSON.stringify(schema.db.transactions)
            );

            return schema.all("transaction");
        });

        this.delete("/transactions/:id", (schema, request) => {
            const id = request.params.id;

            schema.db.transactions.remove(id);

            localStorage.setItem(
                "dt-transactions",
                JSON.stringify(schema.db.transactions)
            );

            return schema.all("transaction");
        });
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>
);
