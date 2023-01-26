import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// * components
import ProductsList from "./components/ProductsList";
// * assets
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductsList />
    </QueryClientProvider>
  );

  // return <div className="App"></div>;
}

export default App;
