import Van from "../Model/vansModel.js"

import multer from 'multer';
export const create = async (req, res) => {
     
  try {
   
      const vanData = new Van({
        ...req.body,
        image: req.file ? `/uploads/${req.file.filename}` : null
      });
      const { type }  = vanData;

      const vanExist = await Van.findOne({ type });
      if ( vanExist ) { 
        return res.status(400).json({ message : 'Van already exist'});
      }
      const savedVan = await vanData.save();
      res.status(200).json(savedVan)
  } catch (error) {
    res.status(500).json({error:"Internal Server error."})
  } 
}  


export const fetch = async (req, res) => {
    try {
       const vans =  await Van.find();
       if (vans.length === 0) {
         return res.status(404).json({message: "User Not Found"});
       }
       res.status(200).json(vans)
    } catch (error) {
        res.status(500).json({error:"Internal Server error."})
    }
} ;

export const update = async(req, res) => {

  try {
     const id = req.params.id;
     const vanExist = await Van.findOne({_id: id});
     if(!vanExist) {
      return res.status(404).json({message:'User Not Found'});
     }

     const updateData = {
      ...req.body,
      image: req.file ? `/uploads/${req.file.filename}` : vanExist.image
  };
  const updateVan = await Van.findByIdAndUpdate(id, updateData, { new: true });
  res.status(201).json(updateVan);
  } catch (error) {
    res.status(500).json({error:"Internal Server error."})
  }
}

export const deleteVan = async(req, res) => {  
  try {
    const id = req.params.id;
    const vanExist = await Van.findById({ _id: id});
    if (!vanExist) {
         return res.status(404).json({message: "Van Not Found"})
    }
    await Van.findByIdAndDelete(id);
    res.status(201).json({message: "Van deleted successful"})   
  } catch (error) {
    res.status(500).json({error: "Internal Server error"})
  }
}
