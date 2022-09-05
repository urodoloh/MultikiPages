import {useState, useEffect} from 'react'
import {Post} from '../api/api'
import {PageType} from '../types/post.interfase';

const useGetAnimePage = (id: PageType['id']|undefined) => {
    const [page, setPage] = useState<PageType>()
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
		Post.getAPost(id)
			.then((data) => {
				setPage(data);
			})
			.catch((err) => {
				setIsError(true);
                console.log('useGetAnimePage:', isError)
			});
	}, []);
    return page;
}

export default useGetAnimePage;