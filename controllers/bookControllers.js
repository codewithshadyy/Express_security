const Book = require("../models/Book")
const mongoose = require("mongoose")


// creating a book:admin only
exports.createBook = async (req, res) => {
  try {
      const {title, author, year, genre, sourceUrl} = req.body
      const book = await Book.create({
        title,
         author, 
         year,
          genre,
           sourceUrl,
           uploadedBy:req.user._id

      })
      return res.json(201).json({"message":"book created succesfully"})

    
  } catch (error) {
    return res.status(500).json({message:error.message})
  }

    
}

// getting all the boks:authenticated users only
exports.getBooks = async (req, res) => {
    try {

        const {page = 1, limit = 10, genre, q} = req.query
        let query = {}

        //  filtering by genre
        if(genre){
            query.genre = genre
        }

        // searching by author or title
        if(q){
            query.$or = [
                {title:{$regex:q, $options:"i"}},
                {author:{$regex:q, $options:"i"}}
            ]
        }

        const books = await Book.find(query)
        .limit(parseInt(limit))
        .skip((page-1)*limit)
        .sort({createdAt:-1})
        res.status(200).json(books)
        
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// getting single book
exports.getBook = async (req,res) => {
    try {
        const book = await Book.findById(req.params.id)
        if(!book){
           return  res.status(404).json({"message":"book not found"})
        }

        return res.status(200).json(book)

        
        
    } catch (error) {

        
    }
    
}


// updating books:admin only
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

// /deleting book:admin only
exports.deleteBook = async (req,res) => {
   try {
    const {id} = req.params
   if(!mongoose.Types.ObjectId.isValid(id)){
     return res.status(400).json({ message: "Invalid book ID" })
   }
    const book = await Book.findByIdAndDelete(id)
    if(!book){
        return res.status(404).json({"message":"Book not found"})
    }
    res.status(200).json({"message":"book deleted succesfully"})
    
   } catch (error) {
    return res.status(500).json({message:error.message})
    
   }    
}