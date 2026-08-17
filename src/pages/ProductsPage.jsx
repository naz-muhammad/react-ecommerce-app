import React, { useEffect, useState } from 'react'
import Product from '../components/Product'

function ProductsPage() {

  const [data , setData] = useState(null);
  const [searchInput , setSearchInput] = useState('')

  useEffect( ()=>{

    const getData = async () => {

      const url = `https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json

`
      const response = await fetch(url);
      const data = await response.json()
      setData(data)

    }
    getData()
  },[])

  // ADDED: Search logic
  const filteredProducts =
    data?.filter((product) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase())
    )

  return (
    <>
      <div>
        <input 
          type="search" 
          placeholder='Enter name...'
          value={searchInput}
          onChange={(e)=>{setSearchInput(e.target.value)}}
        />

        <select>
          <option value="">All Category</option>
        </select>
      </div>

      <div className='flex flex-wrap gap-4 p-6 grid-cols-3'>
      {
        filteredProducts?.map((product) => {
          return (
             <Product key={product.id} productData={product} />
          )
        })
      }
      </div>

    </>
  )
}

export default ProductsPage