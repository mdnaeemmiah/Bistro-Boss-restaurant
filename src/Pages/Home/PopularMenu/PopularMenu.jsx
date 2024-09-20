// import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../hook/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular =menu.filter(item => item.category === "popular")
    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular')
    //             setMenu(popularItems)
    //         })
    // }, [])
    return (
        <section className="mb-10">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"form our menu"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-8">
                {popular.map(item => <MenuItem
                    key={item._id}
                    item={item}
                ></MenuItem>)}
            </div>
           <div className="text-center">
           <button className="btn btn-outline border-0 border-b-4 btn-primary">View Full Menu</button>
           </div>
        </section>
    );
};

export default PopularMenu;