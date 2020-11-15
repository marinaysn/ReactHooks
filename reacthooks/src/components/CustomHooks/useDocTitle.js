import {useEffect} from 'react'

function useDocTitle(count ) {

    useEffect(() => {
        console.log("Update title")
        document.title = `You Clicked ${count} times`

    }, [count]);

    
}

export default useDocTitle
