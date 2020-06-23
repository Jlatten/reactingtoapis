import React from "react";
import "./app.css"
export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            films: []
        }
    }
    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(films => this.setState({ films }))
            .catch(err => console.log(err));
    }

    render() {
        return this.state.films.map((film) => {
            return ( <
                div key = { film.id }
                className = "card m-4" >
                <
                div className = "card-body" >
                <
                h5 className = "card-title" > { film.title } < /h5> <
                h6 class = "card-subtitle mb-2 text-muted" > { film.director } < /h6> <
                p className = "card-text" > { film.description } < /p> <
                a href = { film.url }
                className = "card-link" > Go to endpoint < /a> < /
                div > <
                /div>
            );
        });
    }
}