import React from 'react'
import axios from 'axios'
import './ViewBookList.css'
//importing FavBookList component
import FavBookList from '../FavBookList/FavBookList'

class ViewBookList extends React.Component {
    constructor(){
        super()
        this.state = {
            allBooks: []
        }
    }

    componentDidMount() {
        axios.get('/api/books')
        .then(response => {
            this.setState({ allBooks: response.data})
        })
        .catch(error => {
            console.log(error);
        })
    }

    updateAllBooks = newArray => {
        this.setState({allBooks: newArray})
    }

    render() {
        // console.log(this.state.allBooks)
        let mappedBooks = this.state.allBooks.map((val, index) => {
            return(
                <FavBookList val={val} updateAllBooks={this.updateAllBooks}/>
            )
        })
        return(
            <div className="favListLayout">
                <div className="favListh1">
                 <p>After you've submitted your book information, it'll be posted here:</p>
                </div>
                <br></br>
                <div className="layout">
                    {mappedBooks}
                </div>
            </div>
        )
    }
}

export default ViewBookList