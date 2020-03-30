let bookList = []

let id = 1;

const getList = (req, res) => {
    res.status(200).json(bookList)
}

const postList = (req, res) => {
    
    const {title, author, img} = req.body

  
    const book = {
        id,
        title,
        author,
        img
    }

    bookList.push(book)

    id++

    res.status(200).json(bookList)
}

const updateList = (req, res) => {
    const id = req.params.id
   
    const {title, author, img} =req.body;

    const targetIndex = bookList.findIndex(books => books.id === +id)


    bookList[targetIndex].title = title || bookList[targetIndex].title  
    bookList[targetIndex].author = author || bookList[targetIndex].author
    bookList[targetIndex].img = img || bookList[targetIndex].img


    res.status(200).json(bookList)
}

const removeList = (req, res) => {
    const {id} = req.params
    for(let i = 0; i < bookList.length; i++) {
        if(bookList[i].id == id) {
            bookList.splice(i, 1)
        }
    }
    res.status(200).json(bookList)
}

module.exports = {
    getList,
    postList,
    updateList,
    removeList
}