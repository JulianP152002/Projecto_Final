const MONGODBURI = process.env.MONGODBURI || 'mongodb://localhost:27017/dbtest' 
const PORT =  process.env.PORT || 3000

export { MONGODBURI, PORT }