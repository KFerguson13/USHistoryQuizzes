import ListOfQuestions from "../QuestionsFolder/answers.json";
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './QuestionList.css';

/** This component fetches the data from the json file and displays a question */
const QuestionList = () => {
    const navigate = useNavigate();

    const [problemNumber, setProblemNumber] = useState(0);
    const [wrong, setWrong] = useState(false);
    const [start, setStart] = useState(false);
    const [finished, setFinished] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(10);
    const [formAnswer, setFormAnswer] = useState("")

    //getting a list of questions and then picking a random one
    const stringifieddata = JSON.stringify(ListOfQuestions)
    const data = JSON.parse(stringifieddata)

    //getting parameter from url to determine what test needs to be fetched
    const { test } = useParams()
    const questions = data[test]

    
    /** Checking the correctness of the answer given. If the answer given is wrong, the user gets feedback and can't move
     * on to the next question until they give a correct answer. This function also checks whether the user has reached the
     * end of the quiz.
     */

    const AnswerChangeHandler = (event) => {
        setFormAnswer(event.target.value)
        console.log(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()

        if (formAnswer === questions[problemNumber].CorrectAnswer) {
            setWrong(false);

            if (problemNumber + 1 !== 10)
                setProblemNumber(problemNumber + 1);
            else
                setFinished(true);
        }
        else {
            if (wrong !== true) {
                setCorrectAnswers(correctAnswers - 1);
            }
            setWrong(true);
        }

        setFormAnswer("")

        
    }

    
    return (
        <div className = "container-fluid mt-2">
            {!start && 
                <section className = "start">
                    <h1 className = "display-4"> Ready to Go? </h1>
                    <hr></hr>
                    <p>
                    You will be asked a series of question on this chapter's material. If you give an incorrect answer, you
                    will not be able to move on to the next question until you get it right. If you get the question wrong
                    even once, you will not receive a point for it. Are you ready to start?
                    </p>
                    <button className="btn btn-primary btn-lg" onClick = {() => setStart(true)}> Start </button>
                </section>}


            {finished && 
                <section className = "finished"> 
                    <h3> 
                        You're Done! 
                    </h3>
                    {correctAnswers > 5 && <p> You got over 50% right! Your score is {correctAnswers}/10 </p>}
                    {correctAnswers <= 5 && <p> You got under 50% correct. Study more and then try again. </p>}
                    <button className = "btn btn-primary btn-lg" onClick = {() => navigate('/Home', {replace: true})}> Home </button>
                </section>}
            
            {start && !finished && <> <h3>{questions[problemNumber].Question} </h3>
            <hr></hr> 
            
            <section className="answer_list">
                <form>
                    <div>
                        <input
                            type ="radio"
                            name = "formanswer"
                            value = {questions[problemNumber].Answers[0]}
                            onChange = {AnswerChangeHandler}
                            checked = {questions[problemNumber].Answers[0] === formAnswer}
                            />

                        <label> {questions[problemNumber].Answers[0]} </label>

                        <br></br>

                        <input
                            type ="radio"
                            name = "formanswer"
                            value = {questions[problemNumber].Answers[1]}
                            onChange = {AnswerChangeHandler}
                            checked = {questions[problemNumber].Answers[1] === formAnswer}
                            />
                        <label> {questions[problemNumber].Answers[1]}</label> 

                        <br></br>

                        <input
                            type ="radio"
                            name = "formanswer"
                            value = {questions[problemNumber].Answers[2]}
                            onChange = {AnswerChangeHandler}
                            checked = {questions[problemNumber].Answers[2] === formAnswer}
                            />
                        <label> {questions[problemNumber].Answers[2]}</label> 
                        
                        <br></br>
                        
                        <input
                            type ="radio"
                            name = "formanswer"
                            value = {questions[problemNumber].Answers[3]}
                            onChange = {AnswerChangeHandler}
                            checked = {questions[problemNumber].Answers[3] === formAnswer}
                            />
                        <label> {questions[problemNumber].Answers[3]}</label> 

                        <br></br>

                        <button className="btn btn-primary mt-1 mb-2" onClick = {submitHandler}> Submit </button>
                    </div>
                </form>
                
            </section></> }
            
            {wrong && 
                <section className="wrong_answer">  <h1>Incorrect Answer!</h1> </section>}
            
        </div>
    )
    
}

export default QuestionList;