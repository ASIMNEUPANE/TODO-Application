const TodoModel = require('./model');

const create = async (payload)=>{
    return await TodoModel.create(payload)

}

const list = async()=>{

    return await TodoModel.find();
}


const getById = async(id)=>{
return await TodoModel.findOne(id)


}

const updateById= async ()=>{



}

const deleteById = async()=>{



}