import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"featured item"}
            >
            </SectionTitle>
            <div className="md:flex justify-center bg-slate-500 bg-opacity-30 items-center pt-12 py-20 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2027</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum deleniti at impedit veritatis nihil quaerat perferendis possimus saepe, dolores eligendi dicta in vero porro quisquam voluptates, fugit suscipit. Sed expedita quis autem. Ad, a similique. Architecto dolore mollitia praesentium rerum molestias ex! Magnam tenetur voluptatem explicabo delectus dolore eaque id.</p>
                    <button className="btn btn-outline border-0 border-b-4 btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;