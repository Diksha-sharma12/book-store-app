import Book from "../model/bookmodel.js"
export const getbook=async(req,res) => {
    try{
        const book=await Book.find()
        res.status(200).json(book)
    }
    catch(err){
        console.log("error",err);
        res.status(500).json(err);
    }
};