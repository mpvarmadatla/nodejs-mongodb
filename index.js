const {MongoClient} = require("mongodb")
const http = require('http')
async function main(){
    const uri ="Enter you mongodb url";

    const client = new MongoClient(uri)
    try{
        await client.connect()
        await getElementbyId(client,'62f621d8e8c7c4ef9a81a7c9')
    }
    catch(e){
        console.error(e)
    }

    finally{
        await client.close()
    }
    
}

main().catch(console.error)



async function createListing(client,newListing){
  const result=  await client.db("sample_airbnb").collection("listingAndReviews").insertOne(newListing)
  console.log(`new Lising created with the following id :${result.insertedId}`)
}

async function getElementbyId(client,id){
    const result = await client.db("sample_airbnb").collection("listingAndReviews").find({_id:id});
    console.log(`resutls are - ${result}`)
}

const server =http.createServer((req,res)=>{
   res.write("welcome to home")
})

server.listen(3000,()=>console.log(
    "listening at port 3000"
))