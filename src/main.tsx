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

        this.get("/transactions", () => {
            return this.schema.all("transaction");
        });

        this.post("/transactions", (schema, request) => {
            const data = JSON.parse(request.requestBody);

            return schema.create("transaction", data);
        });

        this.delete("/transactions/:id", (schema, request) => {
            const id = request.params.id;

            schema.find("transaction", id)?.destroy();

            return this.schema.all("transaction");
        });
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>
);
