import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import './App.css';
import "./index.css";
import BookImage from '../src/BookImage.png'


//importing Components
import PostBookList from './Components/PostBookList/PostBookList'
import ViewBookList from './Components/ViewBookList/ViewBookList'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      activePage: ''
    }
  }

  render() {
    return (
      <div className="App">
        <div className="MainSection">
          <div>
           <img className="BookImage" src={BookImage} alt="Book Image"/>
          </div>
          <div className="Container">
            <header>
              <Header />
            </header>
            <nav>
              <button onClick={() => this.setState({activePage: 'post'})}>Add to your list</button>
              <button onClick={() => this.setState({activePage: 'favBooks'})}>Final list</button>
            </nav>
              {
                this.state.activePage === 'post'
                ?
                <PostBookList />
                : 
                this.state.activePage === 'favBooks'
                ?
                <ViewBookList />
                :
                <PostBookList />
              }
          </div>
        </div> 
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
