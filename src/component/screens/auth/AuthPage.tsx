import { GetStaticProps } from 'next'
import style from "./AuthPage.module.scss"
import Layout from '@/component/layout/Layout'
import { AuthService } from '@/component/services/auth.service'
import { IUser, IUserData } from '@/component/interface/user.interface'
import { FC } from 'react'




// =====================================================
// =======> REMAKE <=================> REMAKE <=========
const dataUser = async () => {
  const data = await AuthService.getUser()
  console.log(data)
  return await data
}
dataUser()
// =====================================================
// =====================================================

const AuthPage: FC<IUserData> = ({dataUser}) => {

  const test = async () => {
    'use server'
    console.log("click")
  }

  return (
    <Layout title="Home" description="Home">
      <div>AuthPage</div>
      {/* <form action={test} >
        <input type="text" />
        <input type="text" />
        <button type='submit'>sign in</button>
      </form> */}
  </Layout>
  )
}

export default AuthPage