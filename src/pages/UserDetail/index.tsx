import Footer from "~/components/Footer";

import HeaderUserDetails from "~/components/User/Header-Userdetails";
import UserDetail from "~/components/User/UserDetailContent";


export default function UserDetailPage() {
  return (
    <>
      <HeaderUserDetails/>
      <UserDetail/>
      <Footer/>
    </>
  )
}
