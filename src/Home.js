import { getByPlaceholderText } from '@testing-library/react';
import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    //let name = 'mario';

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPendings] = useState(true);
    const [error, setError] = useState(null);

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch the data for that resource')
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                setBlogs(data);
                setIsPendings(false)
            })
            .catch(err => {
                setIsPendings(false)
                setError(err.message);
            })
        }, 1000)
    }, []);

    const [age, setAge] = useState(25);

    const handleClick = (e) => {
        console.log("'hello ninjas", e);
        setName('luigi');
        setAge(30);
    }

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
    }

    return (
        <div className="home">

            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}

            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <p>{name} is {age} years old</p>
            <button onClick={(e) => {
                handleClickAgain('mario', e)
            }}>Click me again</button>

            {blogs && <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/>}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author == 'mario')} title="Mario's blogs"/>}
        </div>
    );
}

export default Home;