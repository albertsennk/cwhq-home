import React from 'react';

const projectStyles = {
    border: '5px solid black',
    borderRadius: '2em',
    height: '300px',
    width: '500px',
    backgroundColor: 'red',
    display: 'inline-block',
    margin: '4em',
}

const headingStyles = {
    padding: '2em',
    // backgroundColor: 'lightblue',
    textAlign: 'center',
}

const imgStyles = {
    width: '100px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '1em',
    borderRadius: '1em',
}

export class Project extends React.Component {
    render() {
        return (
            <div style={ projectStyles }>
                <img src='/assets/image.png' style={ imgStyles }/>
                <h3 style={ headingStyles }>{this.props.name}</h3>
            </div>
        );
    }
}