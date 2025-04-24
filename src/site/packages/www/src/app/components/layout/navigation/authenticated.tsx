import { User } from "@auth0/nextjs-auth0/types";


export default function Authenticated(props: { user:  User | null | undefined}) {
    return (
      <div>
        <a className='bg-slate-500 hover:bg-slate-800 text-white py-1 px-2 rounded-full' title={props.user?.name ?? ""} href="/auth/logout">Logout</a>
      </div>
    )
  }