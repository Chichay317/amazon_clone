// react responsive carousel for the carousel
import Banner from "@/components/Banner";
import Products from "@/components/Products";
import { useEffect, useState } from "react";
import { ProductProps } from "../../type";

interface Props {
  productData: ProductProps;
}

export default function Home({ productData }: Props) {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <div className="max-w-screen-2xl mx-auto">
        <Banner />
        <div className="relative md:-mt020 lgl:-mt-32 xl:-mt-60 z-20 mb-10">
          <Products productData={data} />
        </div>
      </div>
    </main>
  );
}
