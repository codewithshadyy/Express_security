const Book = require("../models/Book")

exports.createBook = async (req, res) => {
  try {
      const {title, author, year, genre, sourceUrl} = req.body
      const book = await Book.create({
        title,
         author, 
         year,
          genre,
           sourceUrl

      })
      return res.json(201).json({"message":"book created succesfully"})

    
  } catch (error) {
    return res.status(500).json({message:error.message})
  }

    
}


exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find()

        res.status(200).json(books)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.updateBook = async (req, res) => {
    try {
        const { id } = req.params

        const book = await Book.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        )

        if (!book) {
            return res.status(404).json({ message: "Book not found" })
        }

        res.status(200).json(book)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


exports.deleteBook = async (req,res) => {
   try {
    const id = req.params
    const book = await Book.findByIdAndDelete(id)
    if(!book){
        return res.status(404).json({"message":"Book not found"})
    }
    res.status(200).json({"message":"book deleted succesfully"})
    
   } catch (error) {
    return res.status(500).json({message:error.message})
    
   }    
}