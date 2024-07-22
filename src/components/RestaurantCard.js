import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    const {name, cuisines, avgRating, sla} = resData?.info;

    return <div className="res-card">
        <img alt="foodimg" className="res-img"
        src={IMG_URL + resData.info.cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating}</h4>
        <h4>{sla.slaString}</h4>
    </div>
}

export default RestaurantCard;