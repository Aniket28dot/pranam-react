import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [listofRestaurants, setListofRestaurants] = useState([]);

    const [originalList, setOriginalList] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setListofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setOriginalList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return listofRestaurants.length === 0 ? (
        <Shimmer/>
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    ></input>
                    <button className="search-btn" onClick={() => {
                        const filtered = originalList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setListofRestaurants(filtered)
                    }}>Search</button>
                </div>

                <button className="filter-btn" onClick={
                    () => {
                        const filteredList = originalList.filter((res) => res.info.avgRating > 4.5);
                        setListofRestaurants(filteredList);
                    }
                }>Top Restaurants</button>
            </div>
            <div className="res-container">
                {
                    listofRestaurants.map((restaurant) => (
                        <Link to={'/restaurant/' + restaurant.info.id} key={restaurant.info.id}>
                            <RestaurantCard resData={restaurant}/>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default Body;