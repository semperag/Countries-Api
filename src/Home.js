import { getByPlaceholderText } from '@testing-library/react';
import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    //let name = 'mario';

    const [blogs, setBlogs] = useState([
        {title: 'my website', body: 'bodyyyyy', author: 'mario', id: 1},
        {title: 'well party', body: 'bodyyyyy', author: 'yoshi', id: 2},
        {title: 'web deve stuf', body: 'bodyyyyy', author: 'mario', id: 3},
    ]);

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    useEffect(() => {
        console.log('use effect ran')
        console.log(name)
    }, [name]);

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
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <p>{name} is {age} years old</p>
            <button onClick={(e) => {
                handleClickAgain('mario', e)
            }}>Click me again</button>

            <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/>
            <button onClick={() => setName('liugi')}>change name</button>
            <p>{name}</p>
            <BlogList blogs={blogs.filter((blog) => blog.author == 'mario')} title="Mario's blogs"/>
        </div>
    );
}

export default Home;