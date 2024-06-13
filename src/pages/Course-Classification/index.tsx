
import { Container } from "@mui/material";
import CourseClassificationCarousel from "~/components/CourseClassification-carosel";
import CourseClassificationServicesRelated from "~/components/CourseClassification-ServicesRelated";
import Footer from "~/components/Footer";
import HeaderUserDetail from "~/components/Header-Userdetail";


export default function CourseClassidicationPage() {
  return (
    <>
      <HeaderUserDetail />
      <CourseClassificationCarousel />
      <CourseClassificationServicesRelated />
      <Container>
        <Container>
          <Container>
            <Footer />
          </Container>
        </Container>
      </Container>

    </>

  )
}
