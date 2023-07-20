import React, { useState } from "react";
import "./App.css";
import "./index.css";
import Layout from "./components/Layout";
import Filter from "./components/Filter";
import CarLists from "./components/CarLists";

export interface ICar {
  items: {
    title: string;
    photo: string;
    price: number;
  }[];
}

function App() {
  const [CarList, setCarList] = useState<ICar["items"]>([]);
  return (
    <Layout>
      <div className="min-h-[500px]">
        <Filter title="Car Available" search={true} sort={true} />
        <CarLists />
      </div>
    </Layout>
  );
}

export default App;
