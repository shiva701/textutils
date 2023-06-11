import React, {useState} from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [btnText, setBtnText] = useState('Enable Dark Mode')
    const toggleStyle = ()=>{
        if(myStyle.color === 'white'){
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText('Enable Dark Mode');
        }else{
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtnText('Enable Light Mode');
        }
    }

    return (
        <div className='container' style={myStyle}>
            <h1 className='my-5'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            About the Application
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is a TextUtils application</strong> built on React JS. It is used to manipulate basic texts and use it for other purposes. User can convert the text to uppercase, lower case and remove extra spaces. 
                            
                            There is still a lot of scope for the application. We can add additional features in future based on user requirements.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            About the Developer
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Hi, my name is <strong>Shiva Shukla</strong>. This is my first solo React Application. I have 3 years of experience as a Backend Java Developer with Spring Boot, Spring WebFlux, Agile, Microservices, Gradle, JIRA, Kafka, and NoSQL. I graduated from George Mason University last month with a GPA of 3.93/4.0. I worked on full-stack development before, but I used HTML, JSP, CSS, Bootstrap, and Ajax for front-end. Now, I am getting some hands-on with ReactJS.
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={toggleStyle} className="btn btn-primary my-5">{btnText}</button>
        </div>
    )
}
