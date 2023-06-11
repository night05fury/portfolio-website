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
            Harsha is most concerned about that his being traced in the internet because he is 
            getting lot of spam messages from the websites he is visiting regarding his location 
            or regarding his device like lot of adware in the internet which some time be tempting 
            to click and sending your data in the hands of malicious persons over internet, so help 
            Harsha to hide himself from the internet so that no website can trace Harsha location 
            stats and send spam messages
            </p>

            <br/>
            
            <p className="text-xl">
            The surface web refers to the portion of the World Wide Web that is accessible to the general public 
            through conventional search engines or browsers. It includes websites and web pages that are indexed 
            and easily found through search engines like Google, Bing, or Yahoo, and can be accessed without any 
            specialized software or authorization.
            The surface web is the largest and most well-known part of the internet, and it includes a vast range 
            of websites, such as news sites, social media platforms, online shopping sites, and information portals. 
            It is estimated that the surface web represents only a small fraction of the entire internet, with the majority 
            of the content remaining hidden in the deeper, non-indexed parts of the web known as the "deep web" or "dark web".
            </p>
        </div>
    </div>
  )
}

export default About;