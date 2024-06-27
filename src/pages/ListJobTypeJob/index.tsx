
import { Container } from "@mui/material";
import CourseClassificationServicesRelated from "~/components/CourseClassification-ServicesRelated";
import Footer from "~/components/Footer";
import HeaderUserDetail from "~/components/Header-ListJobTypeJob";
import CourseClassificationCarousel from "~/components/CourseClassification-carosel";
import Jobdetail from "~/components/Jobdetail/Jobdetail";

export default function CourseClassidicationPage() {
  return (
    <>
      <HeaderUserDetail />
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
