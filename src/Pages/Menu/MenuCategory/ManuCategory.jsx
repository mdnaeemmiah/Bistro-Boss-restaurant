import { Link } from "react-router-dom";
import Coverd from "../../Shared/Coverd/Coverd";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const ManuCategory = ({ items, title, img }) => {
    return (
        <div className="pt-8">
            {title && <Coverd img={img} title={title}></Coverd>}
            <div className="grid md:grid-cols-2 gap-8 my-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <button className="btn btn-outline border-0 border-b-4 btn-primary">Order Now</button>
            </Link>
        </div>
    );
};

export default ManuCategory;