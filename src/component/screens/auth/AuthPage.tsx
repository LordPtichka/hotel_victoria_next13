import { GetStaticProps } from 'next'
import style from "./AuthPage.module.scss"
import Layout from '@/component/layout/Layout'
import { AuthService } from '@/services/auth.service'
import { IUser, IUserData } from '@/interface/user.interface'
import { FC, useEffect, useState } from 'react'

import { useForm, SubmitHandler } from "react-hook-form"


// =====================================================
// =======> REMAKE <=================> REMAKE <=========

const [userData] = useState<IUser>({} as IUser)

useEffect(() => {
  const dataUser = async () => {
    const data = await AuthService.getUser()
    console.log(data)
    return await data
  }
  dataUser()
})

// =====================================================
// =====================================================




const AuthPage: FC<IUserData> = ({user}) => {
 
  const { register, handleSubmit } = useForm<IUser>()

  const onSubmit: SubmitHandler<IUser> = ( data ) => { // будет принимать поля из формы которые мы получим
    console.log(data) // выполняем действие с данными которые пришли с формы
    console.log(userData)
    // тут должна быть отправка данных с формы на сервак для инициализации
  }


  return (
    <Layout title="Home" description="Home">
      <div>AuthPage</div>()


    <form onSubmit={handleSubmit(onSubmit)} >
      <input type="text" {...register('login') }/>
      <button>test</button>
    </form>
 

  </Layout>
  )
}

export default AuthPage