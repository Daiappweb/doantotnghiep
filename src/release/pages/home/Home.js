import React, { useEffect, useState } from "react";
import HomeView from "./HomeView";
import boots986 from '../../../assets/images/giay/986boots.jpg';
import dr86den from '../../../assets/images/giay/dr86den.jpg';
import dr86nau from '../../../assets/images/giay/dr86nau.jpg';
import dr582 from '../../../assets/images/giay/dr582.jpg';
import glvboots from '../../../assets/images/giay/glvboots.jpg';
import lucaboots from '../../../assets/images/giay/lucaboots.jpg';
import manzaboots from '../../../assets/images/giay/manzaboots.jpg';
import retroboots from '../../../assets/images/giay/retroboots.jpg';
import { variables } from "../../../services/variables";
const data_shoes=[
    {
        src:boots986,
        name:'986 BOOTS',
        price:'1.000.000',
        next:'',
        type:'Giày Boots',
    },
    {
        src:dr86den,
        name:'DR 86 ĐEN ',
        price:'1.200.000',
        next:'',
        type:'Giày Đốc',
    },
    {
        src:dr86nau,
        name:'DR 86 NÂU',
        price:'1.200.000',
        next:'',
        type:'Giày Đốc',
    },
    {
        src:dr582,
        name:'DR 582',
        price:'1.350.000',
        next:'',
        type:'Giày Đốc',
    },
    {
        src:glvboots,
        name:'GLV BOOTS',
        price:'1.500.000',
        next:'',
        type:'Giày Boots',
    },
    {
        src:lucaboots,
        name:'LUCA BOOTS',
        price:'1.250.000',
        next:'',
        type:'Giày Boots',
    },
    {
        src:manzaboots,
        name:'MANZA BOOTS',
        price:'1.900.000',
        next:'',
        type:'Giày Boots',
    },
    {
        src:retroboots,
        name:'RETRO BOOTS',
        price:'1.550.000',
        next:'',
        type:'Giày Boots',
    },
]
function Home(props){

    const [shoes,setShoes] = useState([]);
    const [apiShoes,setApiShoes] = useState([]);
    console.log('data === ',data_shoes);

    
    useEffect(()=>(
        setShoes(data_shoes),
        async function getProducts(){
            const request = 'http://localhost:8063/api/Products'
            const response = await fetch(request);
            const result = await response.json();
            console.log("result ===",result)
            setApiShoes(result)
        }
    ),[])
    console.log("setapishoes === ",apiShoes)
    
    return(
        <div>
            <HomeView
              products={shoes}
              apiProducts = {apiShoes}
            />
        </div>
    )
}
export default Home;