import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";


const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const { id } = useParams();
    
    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + id);
        const json = await data.json();

        console.log(json);
        setResInfo(json.data);
    }

    if (resInfo === null) {
        return <Shimmer/>;
    }

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div>
            <h1>{name}</h1>
            <p>
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {
                    itemCards.map((resCard) => (
                        <li key={resCard?.card?.info?.id}>{resCard?.card?.info?.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu;