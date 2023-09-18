import Rooms from '@/component/screens/rooms/RoomsPage'
import { IRoomData } from '@/interface/room.interface'
import { RoomsService } from '@/services/rooms.service'
import { GetStaticProps, NextPage } from 'next'


interface RoomsPageProps {
  roomAll: IRoomData
}


const roomsPage: NextPage<RoomsPageProps> = ({roomAll}) => {
  console.log(roomAll)
  return <Rooms roomAll={roomAll} />
}

export const getStaticProps: GetStaticProps<RoomsPageProps> = async () => {
  const roomAll = await RoomsService.getRooms()
  return {
    props: { roomAll },
    revalidate: 60,
  }
}

export default roomsPage