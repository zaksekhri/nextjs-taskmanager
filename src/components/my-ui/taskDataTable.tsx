import { task } from "@prisma/client";
import { DataTable } from "./datatable";
import { taskcolumns } from "./taskColumns";

async function getData(): Promise<task[]> {
  const result = await fetch('/api/task', {method:"GET"});
      const tasks:task[] = await result.json();
      return tasks
}

export default async function TaskDataTable() {
  const data = await getData()

  
  /*
  useEffect(() => {
    
  }) */

  
    
  return (
    /*
    <Button onClick={getTasks}>Button</Button><br/><br/>

    */
    <div className="container mx-auto py-10">
      <DataTable columns={taskcolumns} data={data} />
    </div>
  )
}