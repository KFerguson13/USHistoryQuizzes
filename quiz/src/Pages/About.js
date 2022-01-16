import './About.css';

const About = () => {
    return (
        <div className = "container">

            <section className = "mt-2">
                <img 
                    src="https://www.battlefields.org/sites/default/files/styles/resource_hero/public/thumbnails/image/common-Sense%20landscape.jpg?h=4537bda6&itok=00QSX2MA" 
                    style = {{width: "100%", height: "45vh", opacity: "0.8"}}
                    />
                <div className = "image-text-large">
                    <h1> ABOUT </h1>
                </div>
                <h1 className='image-text-small'> ABOUT </h1>

            </section>
            <hr/>
            <section className = "d-sm-flex mb-3">
                <img 
                    className = "img-fluid w-25 me-2"
                    src = "https://th.bing.com/th/id/OIP.bL-spqzp_W3Wbi_5JgEvUQHaFj?pid=ImgDet&rs=1" 
                    />
                <p>
                    This project was something I started up in the beginning of the Spring 2022 semester at the University of
                    Louisiana at Lafayette. I sought to combine my programming studies with my studies for a history class, which
                    shares its name with the title in the header, I was taking at the time and this project was the result. Here, I
                    document the information I learn from the class and pair that information with complementary quizzes. 
                </p>
            </section>
        </div>
    )
}

export default About;

