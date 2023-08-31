const subTaskModel = require("./model");

const create = async (payload) => {
  const {todo, title}= payload;
  if(!todo|| !title) throw new Error("Title or Todo missing")
  return await subTaskModel.create(payload);
};

const list = async () => {
  return await subTaskModel.find();
};

const getById = async (id) => {
  return await subTaskModel.findOne({_id:id});
};
 
const updateById = async (id,payload) => {
  const {status}= payload;
return await subTaskModel.findByIdAndUpdate({_id: id},{status}, {new:true});
};

const deleteById = async (id) => {
return await subTaskModel.deleteOne({_id:id})

};


module.exports = {create, list,getById,updateById,deleteById}
