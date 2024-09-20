import { Helmet } from 'react-helmet-async';
import Coverd from '../../Shared/Coverd/Coverd';
import coverImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import sopdImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hook/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import ManuCategory from '../MenuCategory/ManuCategory';



const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Coverd img={coverImg} title={"our menu"}></Coverd>
            {/* main cover */}
            <SectionTitle
                subHeading="Don't miss"
                heading=" today offered"
            ></SectionTitle>
            {/* offered menu  */}
            <ManuCategory
                items={offered}
            ></ManuCategory>
            {/* dessert menu item */}
            <ManuCategory
                items={dessert}
                title={"dessert"}
                img={dessertImg}
            ></ManuCategory>
            {/* pizza menu item */}
            <ManuCategory
                items={pizza}
                title={"pizza"}
                img={pizzaImg}
            ></ManuCategory>
            {/* salad menu item */}
            <ManuCategory
                items={salad}
                title={"salad"}
                img={saladImg}
            ></ManuCategory>
            {/* salad menu item */}
            <ManuCategory
                items={soup}
                title={"soup"}
                img={sopdImg}
            ></ManuCategory>
        </div>
    );
};

export default Menu;