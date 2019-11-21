import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewMovieForm from '../NewMovieForm'

class NewMoviePage extends Component {

    render() {

        return (
            <div>
                <NewMovieForm />
            </div>
        )
    }
}

const mapSteteToProps = ({ newMovie }) => {
    return {
        newMovie
    }
}
export default connect(mapSteteToProps)(NewMoviePage)