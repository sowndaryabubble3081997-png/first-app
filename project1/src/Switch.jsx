const Switch=(props) =>{
    console.log("start up");
    // console.log(props.profileName);
    // console.log(props.personAge);
    
    return<div>
        <div className="grid grid-cols-3 gap-4 ...">
            <div className="bg-sky-700 m-3 p-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor eum reprehenderit neque, magnam iste, soluta commodi error porro placeat esse fugiat quia fuga, aliquid nemo cupiditate officia aut possimus. Quas.</div>
            <div className="bg-black basis-3xl">2</div>
            <div className="bg-pink-900">3</div>
        </div>
        <h1>welcome </h1>
        <h2>{props.name}{props.age}{props.role}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ad praesentium officiis alias possimus harum libero dolore commodi eius. Doloribus non ad necessitatibus architecto accusantium dignissimos itaque illum, impedit consequuntur?</p>
    </div>
};

const Switch1=(props) =>{
    console.log("start")
    return<div>
        <img  src="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"/>
        <p>{props.name}{props.age}</p>
        <p>Lorem ipsum dolor sit amet consectetur {props.name}adipisicing elit. Dolores ad praesentium officiis alias possimus harum libero dolore commodi eius. Doloribus non ad necessitatibus architecto accusantium dignissimos itaque illum, impedit consequuntur?</p>
    </div>
};
export{Switch,Switch1};