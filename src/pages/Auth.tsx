import { IUserData } from '@/component/interface/user.interface'
import AuthPage from '@/component/screens/auth/AuthPage'
import { FC } from 'react'

const Auth: FC<IUserData> = ({ dataUser }) => {
  return (<AuthPage dataUser={dataUser}/>)
}

export default Auth