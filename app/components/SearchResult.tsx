import { Product } from "@/types/supabase";
import ProductCard from "./shared/ProductCard";

const searchResults = ({ products }: { products: Product[] }) => {
  return (
    <main className="flex justify-center items-center flex-wrap max-w-[1100px] mx-auto">
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </main>
  );
};

export default searchResults;
