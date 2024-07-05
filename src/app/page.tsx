"use client"

import TaskTable from "@/components/my-ui/taskTable";
import TaskDataTable from "@/components/my-ui/taskDataTable";
import Link from "next/link";

export  default function Home() {
  
  return (
    <>
    <div><br/>
      <h1>task manager app</h1>
      <br/><br/>

      <Link href="/api-docs">API Docs</Link>


      <div>
        <h2>tasks</h2> <br/>
        <TaskTable/>
      </div>
      <br/><br/>
      <div>
        <h2>data tasks</h2> <br/>
        
      </div>
    </div>
    </>
  );
}
