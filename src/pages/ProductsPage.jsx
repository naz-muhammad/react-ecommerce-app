import React, { useEffect, useState } from "react";
import Product from "../components/Product";

function ProductsPage({addToCart}) {
  const [data, setData] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [maxPrice, setMaxPrice] = useState(10000);
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
      <div className="flex min-h-screen items-center justify-center text-white">
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
  const maxP = data?.map( elem => elem.priceCents);
  const greatest = maxP?.reduce((max, current) => (
    current > max ? current : max
  ), maxP[0]);

  // cetegory extraction logic
  const mapedCategory = data?.map( (product) => product.category)
  
  // Set is a collection of unique values and it extract the unique value
  const fitlerCategory = new Set(mapedCategory)
  // console.log(fitlerCategory);
  const uniqueCategory  = [...fitlerCategory]
  // console.log(uniqueCategory);


  return (
    <div>
      <div className="w-full flex flex-col sm:flex-row gap-4 my-4 p-6 rounded-xl">
        {/* Search */}
        <input
          type="search"
          placeholder="Search products..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="px-4 py-3 rounded-lg 
               bg-[#1f1f1f] text-white placeholder-gray-500
               border border-gray-700
               outline-none focus:border-gray-500
               transition flex-1 "
        />

        {/* Price Range */}
        <div
          className="flex items-center gap-3 px-4 py-3 rounded-lg 
                  bg-[#1f1f1f] border border-gray-700 flex-1 "
        >
          <div className="flex flex-col gap-2 w-full">
            <div className="flex gap-3 ">
              
              <label className="text-sm text-white ">PKR {maxPrice}</label>
            

              <input
              type="range"
              className="w-full accent-white cursor-pointer flex-1 "
              value={maxPrice}
              min={0}
              max={greatest}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
            </div>
          </div>
        </div>

        {/* Category */}
        <select
          className="w-full sm:w-48 px-4 py-3 rounded-lg
               bg-[#1f1f1f] text-gray-300
               border border-gray-700
               outline-none focus:border-gray-500
               transition cursor-pointer "
          onChange={(e) => setSelectCategory(e.target.value)}
        >
          <option>All Categories</option>
          {
            uniqueCategory?.map( ( category ) => (
              <option 
              key={category} 
              value={category}
              >
                {category}
              </option>
            ))
          }
        </select>
      </div>

      <div className="px-6 grid lg:grid-cols-[repeat(4,1fr)] sm:grid-cols-[repeat(3,1fr)] w-full gap-4">
        {filteredProducts?.map((product) => {
          return <Product key={product.id} addToCart={addToCart} productData={product} />;
        })}
      </div>
    </div>
  );
}

export default ProductsPage;
