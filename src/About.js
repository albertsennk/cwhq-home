import React from 'react';

export class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <h2>A little bit about Noah</h2>
                <p>
                    Noah Albertsen is an artist and programmer based 
                    outside of Baltimore, MD. He graduated in 2019 with
                    a BA in Computing in the Arts from the College of 
                    Charleston. In his work he plays with the balance 
                    between positive and negative space, and the 
                    interactions of vibrant and muted colors. Noah has 
                    a healthy (and growing) houseplant collection and 
                    loves spending time outdoors with his dogs.
                </p>
                <h2>Professional Experience</h2>
                <h4>Programming Languages</h4>
                <ul>
                    <li className="exp">Python</li>
                    <li className="exp">Java</li>
                    <li className="exp">JavaScript</li>
                    <li className="exp">HTML/CSS</li>
                </ul>
                <h4>Coursework</h4>
                <ul>
                    <li className="exp">Programming I</li>
                    <li className="exp">Programming II</li>
                    <li className="exp">Game Programming</li>
                    <li className="exp">Data Structures and Algorithms</li>
                    <li className="exp">Principles of Artificial Intelligence</li>
                    <li className="exp">User Interface Development</li>
                    <li className="exp">Mobile App Development</li>
                </ul>
            </div>
        );
    }
}