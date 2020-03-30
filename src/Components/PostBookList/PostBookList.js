import React from 'react';
import axios from 'axios';
import './PostBookList.css'

class PostBookList extends React.Component {
    constructor() {
        super()
        this.state = {
            title: '',
            author: '',
            img: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        const {title, author, img} = this.state;
        axios.post('/api/books', {
            title,
            author,
            img
        })
        .then(response => {
            console.log(response)
            this.setState({
                title: '',
                author: '',
                img: ''
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        
        const {title, author, img} = this.state;
        return (
            <div className="addToListMain">

                <p>Enter your book description and submit to add it to your final list</p>
                <br></br>
                
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder='Title' onChange={this.handleChange} id='title' value={title}/>
                        <input type="text" placeholder='Author' onChange={this.handleChange} id='author' value={author}/>
                        <input type="text" placeholder='Img' onChange={this.handleChange} id='img'value={img}/>
                        <img src={img} alt="" className="InputImage"/>
                        <button>Add to your final list</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default PostBookList;