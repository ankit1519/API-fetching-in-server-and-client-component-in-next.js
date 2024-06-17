import Product from "./product";
async function apiCall(){
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    return data.products;
}

export default async function  Page() {
    let prod=await apiCall();
    // console.log(prod);
  return (
    <>
        <h1>Product list</h1>
        <br /><br />
        {
            prod.map((item)=>(
                <div key={item.id}> <h3> Title:{item.title}</h3>
                    <Product price={item.price}/>
                </div>

            ))
        }

       
    </>
  )
}

