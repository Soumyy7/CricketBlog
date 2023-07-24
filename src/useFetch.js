import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                // checking for fetch request
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch the data for that resource...')
                    }
                    return res.json();
                })
                //if data is receieved from the fetch request
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                //if error is encountered from the fetch request
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                })
        }, 650)
        // return () => console.log('cleanup')
    }, [url]);
    return { data, isPending, error }
}

export default useFetch;


    // a timeout of 1000ms set so that loading... text shows when the page is being reloaded


    // [] -> this ensures that the useEffect function runs only once i.e. when the web page is first loaded, 
    // without this useEffect is called every single time we make a change to the web page (i.e. here deleting a blog)

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs)
    // }
