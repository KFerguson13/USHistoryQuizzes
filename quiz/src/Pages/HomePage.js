import { Link, useNavigate } from 'react-router-dom';
import "./HomePage.css";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className = "container-fluid">
            <section>
                <h1> The home page will be decorated throughtout the semester </h1>
            </section>
            
            <section>
                <div style = {{background: "gray"}}>
                    <h1> Quizzes </h1>
                </div>
                
                <div>
                    <section className='test1 d-flex justify-content-center align-items-center mb-2' onClick = {() => navigate('/Quizzes/Test1', {replace: true})}>
                        <h1> Indegenous America </h1>
                    </section>
                </div>
                <div>
                    <section className='test2 d-flex justify-content-center align-items-center' onClick = {() => navigate('/Quizzes/Test2', {replace: true})}>
                        <h1> Clashing Cultures </h1>
                    </section>
                </div>
            </section>

        </div>
            )
}


export default Home;