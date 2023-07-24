import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const { data: blogs, isPending, error } = useFetch('https://blogjson-j9ts.onrender.com/blogs');

    return (
        <div className="home">
            {error && <div> {error} </div>}
            {isPending && <div> Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
    );
}

export default Home;

/*

const [name, setName] = useState('mario');

    useEffect(() => {
        console.log('use effect ran')
        console.log(name)
    }, [name]);

    // here [name] is a dependancy on the useEffect function
    // this means, useeffect will work 1 time at the beginning when we open the web page
    // and thereafter only when the name state value changes

<button onClick={() => setName('luigi')}>change name</button>
<p>{name}</p> */

//<BlogList blogs ={blogs.filter((authcheck) => authcheck.author==='mario')} title = "Mario's Blogs" />


// we are using blogs.filter((authcheck) => authcheck.author === 'mario')
// here in orignal code by net ninja he used 'blog' instead
// so i was confused as i thought that he might be using the blog from the bloglist.js file
// that was beign used for iterating over the array blogs
// however its just a compeltely different 'thing' iterator or like a variable that is being called
// to iterate over the array
// so moral of the story, you can use any 'authcheck' value(name), it doesnt matter, it definitely doesnt depend on the map value you
// are using in the bloglist.js file


//react scripts

   // "scripts": {
  //   "start": "react-scripts start",
  //   "build": "react-scripts build",
  //   "test": "react-scripts test",
  //   "eject": "react-scripts eject"
  // }
