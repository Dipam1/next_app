import Link from 'next/link'
import users from '../../../lib/user.json'

const UserInfo = () => {
    return (
        <div><ul>

            {users.map((user) => {
                return (<li key={user.id}>
                    <Link href={`/dashboard/userinfo/${user.id}`}>{user.name}</Link>
                </li>)
            })}
            <li><Link href="/dashboard/userinfo/555">Bugged user</Link></li>
        </ul>
        </div>
    )
}

export default UserInfo