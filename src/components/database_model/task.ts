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
            let results = await prisma.task.findUnique({ where: { task_id: id }, include : {task_list: {select: {list_name:true}}}})

            if (!results) { return false }
            return results;
        } catch (error) {
            return false
        }
    }

    public static async createTask(data: any) {
        // id: number, list_id: number, name: string, completed:boolean, day: Date | null, ordering: number, day_ordering:number
        try {
            console.log(data)
            console.log("data")
            let result = await prisma.task.create({
                data : data
            })

            console.log(result)
            if (result){
                return true
            } else { return false }
        } catch (error) {
            console.log(error)
            return false;
        }
    }


    public static async updateTask(id: number, data: any) {
        try {
			if (
				(await prisma.$executeRaw`SELECT task_id FROM "task" WHERE task_id = ${id};`) ==
				0
			) {
				return false;
			}

            let result = await prisma.task.update({where : { task_id : id}, data})

            if (result) {
                return true
            } else { 
                console.log("hi1111");return false }
        } catch (error) {
            return false
        }
    }

    public static async deleteTask(id: number) {
        try {
            let results = await prisma.task.delete({ where: { task_id: id }})
            console.log(results)
            return true;
        } catch (error) {
            return false
        }
    }
}