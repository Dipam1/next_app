// Mark this as a client component so we can use React hooks (like message.useMessage)
'use client'

// Import the 'use' hook from React to unwrap the params Promise
import { use } from 'react'
import { notFound } from 'next/navigation'
import users from '../../../../lib/user.json'
import { message } from 'antd'

type User = {
    id: string
    name: string
}

// In Next.js 15, params is a Promise. We type it as Promise<{ id: string }>
const UserIdInfo = ({ params }: { params: Promise<{ id: string }> }) => {
    // Ant Design's message hook requires a client component
    const [messageApi, contextHolder] = message.useMessage();
    
    // Use React's 'use' hook to unwrap the params Promise synchronously in a client component
    const { id } = use(params)
    const ourUser = (users as User[]).find((user) => user.id === id)

    if (!ourUser) {
        messageApi.error("Cannot find user.", 2)
        notFound()
    }

    return (
        <div>
            {contextHolder}
            <div>Id: {ourUser.id}</div>
            <div>Name: {ourUser.name}</div>
        </div>
    )
}

export default UserIdInfo