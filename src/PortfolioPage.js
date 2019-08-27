import React from 'react';
import { Project } from './Project';

const projectStyles = {
    flexDirection: 'column',
    display: 'inline-flex',
    // margin: 'auto',
    width: '100%',
    marginLeft: '10em',
}

export class PortfolioPage extends React.Component {
    render() {
        return (
            <div style={ projectStyles }>
                <Project name={'QuizApp'}/>
                <Project name={'Capstone Project'}/>
                <Project name={'Pokeball Hunt'}/>
                <Project name={'AI Agent'}/>
            </div>
        );
    }
}