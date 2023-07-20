import { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import Layout from "./components/Layout";
import Filter from "./components/Filter";
import CarLists from "./components/CarLists";
import { useFetch } from "./hooks/useFetch";

export type ICar = {
  id: string;
  title: string;
  photo: string;
  price: number;
};

function App() {
  const [CarList, setCarList] = useState<ICar[]>([]);
  const [q, setQ] = useState("");
  const [sortOption, setSortOption] = useState("price");

  const { data, isLoading } = useFetch(
    "/spaces/vveq832fsd73/entries?content_type=car"
  );

  useEffect(() => {
    if (data) {
      const carList = getCarList();
      setCarList(carList);
    }
  }, [data]);

  const getCarList = () => {
    const { items } = data;
    const list = items.map((item: any) => {
      return { id: item.sys.id, ...item.fields };
    });
    return list;
  };

  const filter = (items: any) => {
    return items
      .filter(
        (item: ICar) =>
          item.title.toString().toLowerCase().indexOf(q.toLowerCase()) > -1
      )
      .sort((a: ICar, b: ICar) =>
        sortOption === "title"
          ? a.title.localeCompare(b.title)
          : a.price - b.price
      );
  };

  return (
    <Layout>
      <div className="min-h-[500px]">
        <Filter
          title="Car Available"
          search={true}
          sort={true}
          onSearch={(e) => setQ(e)}
          onSort={(e) => setSortOption(e)}
        />
        {isLoading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <CarLists items={filter(CarList)} />
        )}
      </div>
    </Layout>
  );
}

export default App;
