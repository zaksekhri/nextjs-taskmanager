import { task } from "@/components/database_model/task";
import { NextRequest } from "next/dist/server/web/spec-extension/request";

/**
 * @author Zakaria Sekhri
 */
export async function GET(request: NextRequest,{params}: {params: { id: string };}) {
    try {
        console.log("here1")
        console.log(typeof(params.id))
        let results = await task.getTask(parseInt(params.id));
        console.log("here3")
        if (!results[0]) {
            console.log("here4")
            return new Response(JSON.stringify(results), { status: 200 });
        } 
        else {         
            console.log("here5")
            return new Response(`{"message": "Task doesn't exist" \n "error": "${results}" }`, { status: 400 });
        }

    } catch (error) {
        //logger.error(error)
        return new Response(`{"message": "Internal Server Error or doesnt exist" \n "error": "${error}" }`, { status: 500 });
    }
}


/**
 * @author Zakaria Sekhri
 * 
 * updates an account with the passed ID
 *
 * @param {Request} request the request, unused, required to make it work
 * @param {string} id this comes from the URL of the request
 * @return {Response} the response object
 /
export async function PATCH(request: Request,{params}: {params: { id: string };}) {
    try {
        if(request.headers.get("Authorization")){
            const session = lucia.validateSession(request.headers.get("Authorization") as string)
            if ((await session).session?.userId == params.id){
                     
                if(!request.body){
                    return new Response("{\"message\": \"No body attached\"}", { status: 400 });
                }
                
                //Does not actually give the JSON but instead gives the Object created from said JSON
                const data = await request.json()
            
                if(!data){
                    return new Response("{\"message\": \"No data attached\"}", { status: 400 });
                }

                if (await accountHandler.updateAccount(params.id, data)) {
                    return new Response("{\"message\": \"Account updated\"}", { status: 200 });
                } else { 
                    return new Response("{\"message\": \"Account failed to update\"}", { status: 400 });
                }
            }
            else{
                return new Response("{\"message\": \"Please Log in\"}", { status: 403 });
            }
        }
        
        
    } catch (error) {
        //logger.error(error)
        return new Response("{\"message\": \"Internal Server Error\"}", { status: 500 });
    }
}

/**
 * @author Zakaria Sekhri
 * 
 * deletes an account with the passed ID
 *
 * @param {Request} request the request, unused, required to make it work
 * @param {string} id this comes from the URL of the request
 * @return {Response} the response object
 */
export async function DELETE(request: Request,{params}: {params: { id: string };}) {
    try {
        let results = task.deleteTask(parseInt(params.id));
        if (!results[0]) {
            return new Response("{\"message\": \"Task deleted successfully\"}", { status: 200 });
        } 
        else {         
            return new Response(`{"message": "Task doesn't exist" \n "error": "${results}" }`, { status: 400 });
        }

    } catch (error) {
        //logger.error(error)
        return new Response("{\"message\": \"Internal Server Error\"}", { status: 500 });
    }
}