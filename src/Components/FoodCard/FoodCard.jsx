

const FoodCard = ({item}) => {
    const {name,recipe,price,image} = item;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <p className= "bg-slate-900 text-white absolute mr-4 mt-4 right-0">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline bg-slate-100 border-0  border-b-4 btn-primary">Add to cart</button>
                </div>
            </div>
        </div>

    );
};

export default FoodCard;