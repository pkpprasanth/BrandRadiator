import React from 'react';
import "./About.css"
const About = () => {
    return (
        <div class="we-are-block">
        <div id="about-us-section">

          <div class="about-us-image">

            <img src="https://www.brainwareuniversity.ac.in/blog/wp-content/uploads/2020/12/ai-1.png" width="808" height="458" alt="Lobby Image" />

          </div>

          <div class="about-us-info">

            <h2>Artificial Intelligence Technology</h2>

            <p>Today, the amount of data that is generated, by both humans and machines, far outpaces humans' ability to absorb, interpret, and make complex decisions based on that data. Artificial intelligence forms the basis for all computer learning and is the future of all complex decision making</p>

            <a href="#" title="About Us Button">ABOUT US</a>

          </div>

        </div>

        <div id="history-section">

          <div class="history-image">

            <img src="https://static.javatpoint.com/tutorial/ai/images/history-of-ai.png" width="951" height="471" alt="Building Pic" />

          </div>

          <div class="history-info">

            <h2>History of Artificial Intelligence</h2>

            <p>Artificial Intelligence is not a new word and not a new technology for researchers. This technology is much older than you would imagine. Even there are the myths of Mechanical men in Ancient Greek and Egyptian Myths. Following are some milestones in the history of AI which defines the journey from the AI generation to till date development.</p>

            <a href="#" title="History Button">HISTORY</a>

          </div>

        </div>

</div>
    );
};

export default About;