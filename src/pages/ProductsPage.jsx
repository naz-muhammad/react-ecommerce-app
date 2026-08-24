import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import ProductFilters from "../components/ProductFilters";

function ProductsPage() {
  const [data, setData] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [maxPrice, setMaxPrice] = useState(0);
  const [selectCategory , setSelectCategory] = useState('')
 

  useEffect(() => {
    const getData = async () => {
      const url = `https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json`;
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    };
    getData();
  }, []);

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center font-sans text-muted">
        Loading...
      </div>
    );
  }

  // Searching logic
  const filteredProducts = data?.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchInput.toLowerCase());

    const matchesPrice = maxPrice <= product?.priceCents;

    const matchesCategory = selectCategory === "" || selectCategory === product?.category

    return matchesSearch && matchesPrice && matchesCategory;
  });

  // max priceCents logic
  const totalPrice = data?.map( elem => elem.priceCents);
  const greatest = totalPrice?.reduce((max, current) => (
    current > max ? current : max
  ), totalPrice[0]);

  // cetegory extraction logic
  const mapedCategory = data?.map( (product) => product.category)
  
  // Set is a collection of unique values and it extract the unique value
  const fitlerCategory = new Set(mapedCategory)
  // console.log(fitlerCategory);
  const uniqueCategory  = [...fitlerCategory]
  // console.log(uniqueCategory);


  return (
    <div className="min-h-screen bg-ink">

      <ProductFilters
        searchInput={searchInput}
        onSearchChange={(e) => setSearchInput(e.target.value)}
        maxPrice={maxPrice}
        greatest={greatest}
        onPriceChange={(e) => setMaxPrice(Number(e.target.value))}
        selectCategory={selectCategory}
        onCategoryChange={(e) => setSelectCategory(e.target.value)}
        uniqueCategory={uniqueCategory}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {filteredProducts?.map((product) => {
          return <Product key={product.id} productData={product} />;
        })}
      </div>

    </div>
  );
}

export default ProductsPage;