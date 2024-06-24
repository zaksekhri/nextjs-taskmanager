import { prisma } from "@/components/models/prisma"
import { tasklist } from "./task_list"

/**
 * @author Zakaria Sekhri
 */
export class task{

    
    public static async getTasks() {
        try {
            let result = await prisma.task.findMany()
            return result
        } catch (error) {
            return error
        }
    }

    public static async getTask(id: number) {
        try {
            let results: object = await prisma.task.findUnique({ where: { task_id: id }, include : {task_list: {select: {list_name:true}}}})
            return results;
        } catch (error) {
            return [false, error]
        }
    }

    public static async createTask(id: number, list_id: number, name: string, completed:boolean, day: Date | null, ordering: number, day_ordering:number) {
        try {
            let result = await prisma.task.create({
                data : {
                    task_id:id,
                    task_list_id:list_id,
                    completed:completed,
                    ordering:ordering,
                    day:day,
                    day_ordering:day_ordering
                }
            })
        } catch (error) {
            
        }
    }


    public static async updateTask(id: number, data:JSON) {}

    public static async deleteTask(id: number) {
        try {
            let results = await prisma.task.findUnique({ where: { task_id: id }})
            console.log(results)
            return results;
        } catch (error) {
            return [false, error]
        }
    }
}