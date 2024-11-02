exports.createBlog = (req, res) => {
    res.status(201).json({message:`Blog Create successfully `, status:"success"})
};

exports.ReadBLog=(req,res)=>{
    res.status(201).json({message:`Blog Read successfully `, status:"success"})
}
exports.updateBLog=(req,res)=>{
    res.status(201).json({message:`Blog update successfully `, status:"success"})
}
exports.deleteBlog=(req,res)=>{
    res.status(201).json({message:`Blog delete successfully `, status:"success"})
}