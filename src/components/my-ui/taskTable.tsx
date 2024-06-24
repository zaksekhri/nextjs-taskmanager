
import { task } from "@prisma/client";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useEffect, useState } from "react";




export default function TaskTable() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [items, setItems] = useState()
  
  useEffect(() => {
    const getTasks = async () => {
      try {
          const response = await fetch('/api/task', {method:"GET"});
          if (!response.ok) {
            throw new Error('Failed to fetch tasks')
          }
          const data = await response.json();
          //setTasks(data)
          setItems(data.map((sub: any) => (
          <TableRow key={sub.task_id}>
            <TableCell>{sub.task_id}</TableCell>
            <TableCell>{sub.task_name}</TableCell>
            <TableCell>{sub.task_list_id}</TableCell>
            <TableCell>will eventually have name of associated task list</TableCell>
            <TableCell>{sub.completed ? "true" : "false"}</TableCell>
            <TableCell>{sub.ordering}</TableCell>
            <TableCell>{sub.day ? sub.day.toString() : "n/a"}</TableCell>
            <TableCell>{sub.day_ordering}</TableCell>
          </TableRow>
          )))

          //setItems(data.map((sub: task) => (<><p key={sub.task_id}>{JSON.stringify(sub)}</p><br/></>)))



         // var ? var2 : var3
          //    
          //    <TableCell>Paid</TableCell>
          //    <TableCell>Credit Card</TableCell>
          //    <TableCell className="text-right">$250.00</TableCell>
          //  



          //const listItems = [];
          //for (let i = 0; i < data.length; i++) {
          //  listItems.push(<li key={i}>{data[i]}</li>);
          //}
          //console.log("bleh2")
          //console.log()
    
          //console.log("bleh13")
          //console.log(tasks)
          //console.log("bleh4")
          //console.log(typeof(tasks))
          //console.log("5")
          //console.log(JSON.stringify(tasks))
    
      } catch (error: any) {
          console.log(error)
          setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    getTasks()
    //console.log(items)
  }, []);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Loading...</p>
  
  return (
    <div>
      <br/>
      <Table>
          <TableHeader>
            <TableRow>
              <TableHead>task id</TableHead>
              <TableHead>task name</TableHead>
              <TableHead>task list id</TableHead>
              <TableHead>task list</TableHead>
              <TableHead>completed</TableHead>
              <TableHead>ordering</TableHead>
              <TableHead>day</TableHead>
              <TableHead>day ordering</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items}
          </TableBody>
        </Table>
    </div>
  )
}