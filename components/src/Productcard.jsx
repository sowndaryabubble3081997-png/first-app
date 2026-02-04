import './App.css'



const Component=()=>{
    const products = [
{   id:1,
    title: 'laptop', 
    price: 5000, category: "Electronics",
    inStock: true,
    image: "https://thumb.ac-illust.com/a2/a2dee65bfe54b47c98ad9b8c9ee16133_t.jpeg",
},

{    id:2,
    title: "T-Shirt",
    price: 500, 
    category: "Clothing",
    inStock: false,
    image: "https://static.vecteezy.com/system/resources/thumbnails/028/252/048/small/men-s-t-shirt-realistic-mockup-in-different-colors-ai-generated-photo.jpg" },

 {  id:3,
    title: "Book",
    price: 300, 
    category: "Books", 
    inStock:true, 
    image: "https://i.pinimg.com/736x/7a/07/5a/7a075ae77e31249f5585f38cbeb77dd0.jpg" },

   { id:4,
     title: "Headphones", 
    price: 1200, 
    category: "Electronics",
    inStock: true, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmPXfeDt5hJmrEqteqyEK7xxJLaBb9CvmoHg&s" },
   {  id:5,
      title: "Shoes", 
      price: 2200, 
      category: "Clothing",
      inStock: false, 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa-bcJMizIMgE3f831cfWxSCzYTfYyINYK5w&s" },
   { id:6,
      title: "Notebook",
      price: 150, 
      category: "Books" , 
      inStock: true, 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPrf32SH6zK1xZpmem7r_mel8ZArDiQMsFQ&s" },
];

  console.log("working");




  return (
    <div className=' grid bg-pink-950 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 '>
      
        {products.map((user)=>( 
          <div key={user.id} className="
        bg-white rounded-lg shadow p-4
        w-full
        min-h-40 sm:min-h-48 md:min-h-56 lg:min-h-64
      ">
            <div className='card  hover:bg-sky-700'>
               <img src={user.image}/>
              <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>1-{user.title}</h1>
              <p >Price:{user.price}</p>
              <p >Category:{user.category}</p>
             
              
              <h2>   {user.inStock ? (
            <p className="text-pink-600 font-semibold">🟢In Stock</p>
          ) : (
            <p className="text-red-600 font-semibold">❌Out of Stock</p>
          )}</h2>
             
             
             {/* <button class="bg-sky-500 hover:bg-sky-700">Save changes</button> */}
             </div>
              
              
              </div>
              
        ))}

    
      {/* <Productcard/>
      <Productlist/>
      <Footer/> */}

    </div>
   
      );
}
export default Component;