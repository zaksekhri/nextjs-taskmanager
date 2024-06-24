import { prisma } from "@/components/models/prisma"
import { Prisma } from "@prisma/client"

/**
 * @author Zakaria Sekhri
 */
export class tasklist{

    
    public static async getTaskLists() {
        try {
            let result = await prisma.task_list.findMany()
            return result
        } catch (error) {
            return error
        }
    }

    public static async getTaskList(id: number) {
       try {
            let results = await prisma.task_list.findUnique({where : {list_id:id}})
            //console.log(results)
            return results;
        } catch (error) {
            return [false, error]
        }
    }

    public static async createTaskList(id: number, name: string) {
        
        try {
            let result = await prisma.task_list.create({
                data : {
                    list_id:id,
                    list_name:name
                }
            })
            return result
        } catch (error) {
            
        }
    }


    public static async updateTaskList(id: number, data:JSON) {}

    public static async deleteTaskList(id: number) {
        try {
            let results = await prisma.task_list.findUnique({ where: { list_id: id }})
            return results;
        } catch (error) {
            return [false, error]
        }
    }
}