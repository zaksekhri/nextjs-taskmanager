import Link from "next/link";



export default function ApiDocPage() {
    return (
        <>
        
      <Link href="/">home</Link>
      
        <p>example api request body for task/id with the PATCH method</p>
        <code>{`
            { "task_list_id" : 2 }
          `}
        </code>
        follows the format 
        <code>{`
            { "FIELD_TO_UPDATE" : NEW_VALUE }
          `}
        </code>
        </>
    )
}