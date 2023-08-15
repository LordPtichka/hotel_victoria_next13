import Layout from "@/component/layout/Layout"
import { FC } from "react"

const Booking: FC = () => {
  return (
    <Layout title="Booking">
      <script src="/travelline/booking_form.js" defer></script>
      <script src="/travelline/head_script.js" defer></script>

      <section className="name-page">
        <div className="title-for-page font-for-title">Бронирование</div>
      </section>
      {/* <!-- <p id='tl-anchor'>С помощью приведенной ниже формы вы можете забронировать наши номера в режиме онлайн и получить гарантированную бронь.</p> --> */}
      <div id="tl-booking-form">&nbsp;</div>
    </Layout>
  )
}

export default Booking
