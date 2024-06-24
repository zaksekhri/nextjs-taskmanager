
import { task } from "@/components/database_model/task";
import { NextRequest } from "next/server";

//const logger = loggerSingleton.getInstance()

export async function GET(request: NextRequest){
    try {
        let results = await task.getTasks()
        //console.log(results)
        let output = JSON.stringify(results)
        console.log(typeof(output))
        
        return new Response(output, { status: 200 });
    } catch (error) {
        return new Response(`{"message": "Internal Server Error or no tasks" \n "error": "${error}" }`, { status: 500 });
    }
}

/**
 * @author Zakaria Sekhri
 */
export async function POST(request:NextRequest){
    return new Response("{\"message\": \"not functional\"}", { status: 200 });
    /*
   try {
     
    if(!request.body){
        return new Response("{\"message\": \"No body attached\"}", { status: 400 });
    }
 
 
    //Does not actually give the JSON but instead gives the Object created from said JSON
    const data = await request.json()
 
    if(!data){
        return new Response("{\"message\": \"No data attached\"}", { status: 400 });
    }
    if(!data.email || !data.password){
        return new Response("{\"message\": \"No password and/or email provided\"}", { status: 400 });
    }

    if(await accountHandler.createAccount(data.email,data.password)){
        return new Response("{\"message\": \"Account created successfully\"}", { status: 201 });
    } 
    else {
        return new Response("{\"message\": \"Account already exists\"}", { status: 400 });
    }

   }
   catch (error) {
    //logger.error(error)
    return new Response("{\"message\": \"Internal Server Error\"}", { status: 500 });

   }  */
}
