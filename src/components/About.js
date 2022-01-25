import React, {useRef, forwardRef} from 'react';

const About = forwardRef(({ref}) => {

    return (
        <>
        <div ref={ref} className="about-me max-width">
            <h3 id="about">About Me</h3>

            Hello! 👋 

            <p>I'm Craig - a Junior Software Developer from Edinburgh, Scotland.</p>

            <p>After four years working as a recruiter in the tech industry in Dubai, I made a career change into tech. In July, I graduated from CodeClan in Edinburgh - an SQA-accredited digital skills academy teaching the fundamentals of Software Development through over 800 hours coding. </p>

            <p>Over the 16 weeks, I learned how to create full-stack web and mobile apps from scratch using various languages, libraries and frameworks including JavaScript, React, React Native, Express, Java, Spring Boot, Python, Flask, HTML, CSS, & SQL.</p>

            <p>I encourage you to check out my projects below that I did as part of the course! </p>

            <p>If you'd like to connect with me, I'm available on both <a href="http://www.linkedin.com/in/crwils/">LinkedIn</a> and <a href="http://www.twitter.com/cr_wils">Twitter</a> <b>or</b> you can drop me an <a href="mailto:craigwilsonmusic@gmail.com">email</a> - I'd love to hear from you!</p>
        </div>
        <script>
            $(document).on('mousedown', '.stop-drag', function(){
                $('.stop-drag').attr('draggable', 'true')
                $('.stop-drag').attr('ondragstart', 'event.preventDefault(); event.stopPropagation();')
	        });
        </script>
        </>
    );

})

export default About;