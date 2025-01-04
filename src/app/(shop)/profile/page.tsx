import { auth } from "@/auth"
import { Title } from "@/components/ui/title/Title"
import { redirect } from "next/navigation"

export default async function ProfilePage(){

    const session = await auth()

    if( !session?.user) {
        redirect('/')
    }
  return (
    <div>
        <Title title="Profile" />
        <pre>
        {
            JSON.stringify(session, null, 2)
        }

        </pre>
    </div>
  )
}
