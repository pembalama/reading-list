import React from 'react'
import axios from 'axios'
import './FavBookList.css'

class FavBookList extends React.Component {
    constructor(){
        super()
        this.state = {
            editStatus: false,
            title: '',
            author: '',
            img: ''
        }
    }

    changeEditStatus = () => {
        this.setState({editStatus: !this.state.editStatus})
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    updateBookList = () => {
        const {title, author, img} = this.state
        axios.put(`/api/books/${this.props.val.id}`, {title, author, img})
        .then(response => {
            console.log(response)
            this.setState({editStatus: !this.state.editStatus})
            this.props.updateAllBooks(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    deleteBookList = () => {
        axios.delete(`api/books/${this.props.val.id}`)
        .then (response => {
            this.props.updateAllBooks(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    render() {
        
        // console.log(this.state)
        return (
            <div className="favListContainer">
                <div className="favLayout">
                    <h2>{this.props.val.title}</h2>
                    <p>{this.props.val.author}</p>
                    <img src={this.props.val.img} alt="image" height="500"/>
                </div>
                <br></br>
                <button className="btn" onClick={this.changeEditStatus}>Edit</button>
                <button className="btn" onClick={this.deleteBookList}>Delete</button>
                
                {
                    this.state.editStatus === true
                    ?
                    <section>
                        <input type="text" placeholder='Title' onChange={this.handleChange} id='title'/>
                        <input type="text" placeholder='Author' onChange={this.handleChange} id='author'/>
                        <input type="text" placeholder='Img' onChange={this.handleChange} id='img'/>
                        <button className="btn" onClick={this.updateBookList}>Update</button>
                    </section>
                    :
                    null
                }
                
                <br></br>
                <br></br>
                <br></br>
                
            </div>
        )
    }
}

export default FavBookList;
