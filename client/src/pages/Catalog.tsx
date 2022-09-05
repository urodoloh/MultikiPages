import { response } from 'express';
import * as React from 'react';
import {useState, useEffect} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
} from "react-router-dom";
import {Post} from '../api/api'
import useGetAnimeList from '../hooks/useGetAnimeList';
import {Api, PageType} from '../types/post.interfase';



 function Catalog() {
    const list = useGetAnimeList();
    
    function mapLink(): any{ 
        if (!list) return null 
            return list.map((element:PageType)=>( 
                <li key={element.id}> 
                    <img width="100" src={`${element.image}`} /> 
                    <Link to={`${element.id}`}>{element.name}</Link> 

                </li> 
            ));
    };


    return (<div>
        <h1>Anime List</h1>
        <nav>
            <ul>
                {mapLink()}                
            </ul> 
        </nav>
    </div>
    );
}

export default Catalog;