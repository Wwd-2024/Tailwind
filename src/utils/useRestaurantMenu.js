
import {useState, useEffect } from 'react';
import {DETAIL_INFO} from '../utils/constants';


export const useRestaurantMenu = (resID) => {


    const [resDetail, setResDetail] = useState(null);
    const fetchData = async () => {
        const data = await fetch(DETAIL_INFO+resID);
        const json = await data.json();
        setResDetail(json)
    }
    useEffect(()=> {
        fetchData();
    },[]);



    return resDetail;
}