import CreateServices from "@/component/screens/create-service/CreateService"
import { IServiceData } from "@/interface/service.interface"

import { ServicesService } from "@/services/services.service"
import { GetStaticProps, NextPage } from "next"

const CreateNewsPage: NextPage<IServiceData> = ({ servicesAll }) => {
  // console.log(servicesAll)
  return <CreateServices servicesAll={servicesAll} />
}

// ===================================
// получение данных с внешнего сервера и их прокидка на клиента
export const getStaticProps: GetStaticProps<IServiceData> = async () => {
  const servicesAll = await ServicesService.getServices()

  return {
    props: { servicesAll },
    revalidate: 60,
  }
}
// ===================================

export default CreateNewsPage
