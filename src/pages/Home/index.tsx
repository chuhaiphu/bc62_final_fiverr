
import Header from '~/components/Home/Header';
import Footer from '~/components/Footer';
import Category from '~/components/Home/Category';
import Carousel from '~/components/Home/Carousel'
import Proposition from '~/components/Home/Proposition'



export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <Proposition />
      <Category/>
      <Footer/>

    </>
  )
}
