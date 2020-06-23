import React from "react";
import "./app.css";

export default class App extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                films: [],
                people: [],
                loadPeople: false,
                loadFilms: false,
        }
    }
    loadFilms() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(films => this.setState({ films }))
            .catch(err => console.log(err));
          
    }
    loadPeople() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(people => this.setState({ people }))
            .catch(err => console.log(err));
    }
    render() {
        if(this.state.loadFilms){
            this.loadFilms();
            return this.state.films.map(film =>{
                return (
                    <div key= {film.id} className="card m-4">
                        <div className="card-body">
                            <h5 className="card-title" > {film.title} </h5> 
                            <h6 className="card-subtitle mb-2 text-muted" > {film.director} </h6> 
                            <p className="card-text" > {film.description} </p> 
                            <a href={film.url} className="card-link" > Go to endpoint </a> 
                        </div> 
                    </div>
                )
            })
            }
            else if(this.state.loadPeople){
                this.loadPeople();
                return this.state.people.map(person =>{
                    return (
                        <div key= {person.id} className="card m-4">
                            <div className="card-body">
                                <h5 className="card-title"> {person.name} </h5> 
                                <h6 className="card-subtitle mb-2 text-muted"> {person.age} </h6> 
                                <p className="card-text" > {person.hair_color} </p> 
                                <a href={person.url} className="card-link" > Go to endpoint </a> 
                            </div> 
                        </div>
                    )
                })
            } else { 
            return (
                <>
               <button onClick={() => this.setState({ loadFilms:true})} className= "btn btn-primary btn-sm m-3"> Load films </button>
               <button onClick={() => this.setState({ loadPeople :true})}className="btn btn-primary btn-sm m-3"> Load people </button>
                </>
            )
            }}}
