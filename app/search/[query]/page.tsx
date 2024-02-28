"use client";
import { useSupabase } from "@/hooks/useSupabase";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import SearchResult from "../../components/SearchResult";

const QueryPage = () => {
  const { query } = useParams();
  const { filteredProducts, getFilteredProducts } = useSupabase();

  useEffect(() => {
    getFilteredProducts(query.toString());
  }, [getFilteredProducts, query]);
  return (
    <div>
      <SearchResult products={filteredProducts} />
    </div>
  );
};

export default QueryPage;
