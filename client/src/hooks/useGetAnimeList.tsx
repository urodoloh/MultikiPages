import {useState, useEffect} from 'react'
import {Post} from '../api/api'
import {PageType} from '../types/post.interfase';


 
const useGetAnimeList = () => {
    const [list, setList] = useState<PageType[]>([])
    const [isError, setIsError] = useState<boolean>(false);
    useEffect(() => {
		Post.getPosts()
			.then((data) => {
				setList(data);    
			})
			.catch((err) => {
				setIsError(true);
                console.log("useGetAnimeList:",isError)
			});
	}, []);
    
    return list
}
 
export default useGetAnimeList;