import { IUserData } from '@/interface/user.interface'
import AuthPage from '@/component/screens/auth/AuthPage'
import { FC } from 'react'

const Auth: FC<IUserData> = ({ user }) => {
  return (<AuthPage user={user}/>)
}

export default Auth