import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500s">
                 About</p>
            </div>
            <p className="text-xl mt-20">
                I'm Mayank Kumar Patel, a passionate web developer with a love for gaming and gardening. 
                With a strong background in web development and a knack for creating user-friendly and visually appealing websites, 
                I thrive in the ever-evolving digital landscape.
                Let me take you through my skills as a web developer and about myself.
            </p>

            <br/>
            
            <p className="text-xl">
                I am a graduate of the VIT Bhopal University with a Bachelor of Technology in Computer Science and Engineering with Specialisation in Gaming Technology.
                As an avid gamer, I immerse myself in various genres and platforms, appreciating the artistry and storytelling within games. 
                Gaming has not only sharpened my problem-solving and critical thinking skills but has also sparked my creativity in designing user experiences.
            </p>
        </div>
    </div>
  )
}

export default About;