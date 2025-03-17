import { Link } from 'react-router-dom';

const Home = () => {


    return (
        <>
            <h1>Data Structure Selection</h1>
            <Link to="/stack">
                <button>Stack</button> 
            </Link>
            <Link to="/queue">
                <button>Queue</button>
            </Link>
         </>     
    )
}


export default Home;