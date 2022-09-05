import {
  Link
} from "react-router-dom";
import useGetAnimePage from '../hooks/useGetAnimeList';
import {PageType} from '../types/post.interfase';

function RandomButton() {   
    const list:PageType[] = useGetAnimePage()
    const randomNumber = Math.floor(Math.random() * list.length)
    function linkTo(){
        if (!list) return null
        if (list[randomNumber]){
            return list[randomNumber].id
        }
    }

    return (
        <div>
            <h2>
                <ul>
                    <li><Link replace={true} to={`/anime/${linkTo()}`}>Random Anime</Link></li>
                </ul>
            </h2>
        </div>
    )
    
}

export default RandomButton;