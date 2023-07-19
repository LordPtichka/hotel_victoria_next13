import { GetStaticProps } from 'next'
import style from "./AuthPage.module.scss"
import Layout from '@/component/layout/Layout'
import { AuthService } from '@/services/auth.service'
import { IUser, IUserData } from '@/interface/user.interface'
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

const AuthPage: FC<IUserData> = ({user}) => {

  const handleClick = () => {
    console.log("click");
  };


  return (
    <Layout title="Home" description="Home">
      <div>AuthPage</div>
      <form  >
        <input type="text" className={style.input}/>
        <input type="text" className={style.input}/>
        <button type='submit'>sign in</button>
      </form>

      <button onClick={handleClick}> click </button>


  </Layout>
  )
}

export default AuthPage