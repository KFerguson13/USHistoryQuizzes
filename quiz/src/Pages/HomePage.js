import { useNavigate } from 'react-router-dom';
import "./HomePage.css";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className = "container-fluid">
            <section>
                <h1 className ="display-4"> Before You Start ...</h1>
                <hr></hr>
                <p>
                    The information being tested on here is information from a college history class. That history class covered US history
                    up until 1877 and, for now at least, that will be the limit for what is tested her as well. The material is divided up
                    into multiple quizzes as shown below with the subjects named being based on the names of readings from the class. There
                    will be no more than 15 questions per quiz. At the end of the quiz, you will be given your score. If you input an
                    incorrect answer once for a question, your score will indicate you got that question wrong even once you put the correct
                    answer in.

                    Now, with all that said. Start once you're ready!
                </p>
                <div className = "text-center">
                    <p style = {{fontWeight: "bold"}}>
                        “To be hopeful in bad times is not just foolishly romantic. It is based on the fact that human history is a history not only 
                        of cruelty, but also of compassion, sacrifice, courage, kindness." <br></br> - Howard Zinn
                    </p>
                </div>
                <hr></hr>
            </section>
            <section className = "quiz-intro mt-2 mb-2 d-flex justify-content-center align-items-center">
                <h1> Test your knowledge on US History with some of the quizzes below! </h1>
            </section>
            
            <section className = "mb-2">
                <div>
                    
                </div>
                
                <div>
                    <section className='test1 d-flex justify-content-center align-items-center mb-2' onClick = {() => navigate('/Quizzes/Test1', {replace: true})}>
                        <h1> Indegenous America </h1>
                    </section>
                </div>
                <div>
                    <section className='test2 d-flex justify-content-center align-items-center mb-2' onClick = {() => navigate('/Quizzes/Test2', {replace: true})}>
                        <h1> Colliding Cultures </h1>
                    </section>
                </div>
                <div>
                    <section className='test3 d-flex justify-content-center align-items-center mb-2' onClick = {() => navigate('/Quizzes/Test3', {replace: true})}>
                        <h1> British North America </h1>
                    </section>
                </div>
            </section>
        </div>
            )
}


export default Home;