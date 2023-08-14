import CreateRooms from "@/component/screens/create-room/CreateRoom"
import { IRoomData } from "@/interface/room.interface"

import { RoomsService } from "@/services/rooms.service"
import { GetStaticProps, NextPage } from "next"

const CreateNewsPage: NextPage<IRoomData> = ({ roomsAll }) => {
  // console.log(roomsAll)
  return <CreateRooms roomsAll={roomsAll} />
}

// ===================================
// получение данных с внешнего сервера и их прокидка на клиента
export const getStaticProps: GetStaticProps<IRoomData> = async () => {
  const roomsAll = await RoomsService.getRooms()

  return {
    props: { roomsAll },
    revalidate: 60,
  }
}
// ===================================

export default CreateNewsPage
