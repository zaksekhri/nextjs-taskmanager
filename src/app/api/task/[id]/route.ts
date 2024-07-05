import { task } from "@/components/database_model/task";
import { NextRequest } from "next/dist/server/web/spec-extension/request";

/**
 * @author Zakaria Sekhri
 */
export async function GET(request: NextRequest,{params}: {params: { id: string };}) {
    try {
        let results = await task.getTask(parseInt(params.id));
        if (!results) {
            return new Response(JSON.stringify(results), { status: 200 });
        } 
        else {         
            return new Response(`{"message": "Task doesn't exist" }`, { status: 400 });
        }

    } catch (error) {
        //logger.error(error)
        return new Response(`{"message": "Internal Server Error or doesnt exist" }`, { status: 500 });
    }
}


/**
 * @author Zakaria Sekhri
 * 
 * updates an task with the passed ID
 *
 * @param {Request} request the request, unused, required to make it work
 * @param {string} id this comes from the URL of the request
 * @return {Response} the response object
 */
export async function PATCH(request: Request,{params}: {params: { id: string };}) {
    try {       
        if(!request.body){
            return new Response("{\"message\": \"No body attached\"}", { status: 400 });
        }
        
        //Does not actually give the JSON but instead gives the Object created from said JSON
        const data = await request.json()
    
        if(!data){
            return new Response("{\"message\": \"No data attached\"}", { status: 400 });
        }

        let result = await task.updateTask(parseInt(params.id), data)

        if (result) {
            return new Response("{\"message\": \"task updated\"}", { status: 200 });
        } else { 
            return new Response("{\"message\": \"task failed to update or doesnt exist\"}", { status: 400 });
        }
        
    } catch (error) {
        return new Response("{\"message\": \"Internal Server Error\"}", { status: 500 });
    }
}

/**
 * @author Zakaria Sekhri
 * 
 * deletes an task with the passed ID
 *
 * @param {Request} request the request, unused, required to make it work
 * @param {string} id this comes from the URL of the request
 * @return {Response} the response object
 */
export async function DELETE(request: Request,{params}: {params: { id: string };}) {
    try {
        if (await task.deleteTask(parseInt(params.id))) {
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