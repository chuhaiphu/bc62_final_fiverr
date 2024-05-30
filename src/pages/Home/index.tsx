
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Category from '~/components/Category';
import Carousel from '~/components/Carousel'
import Proposition from '~/components/Proposition'
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
