import React from "react";
export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            films: []
        }
    }
    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/locations")
            .then(res => res.json())
            .then(films => this.setState({ films }))
            .catch(err => console.log(err));
    }



    render() {
        return this.state.films.map(film => {
            return <h1 > { film.title } < /h1>
        })
    }
}