
import { Container } from "@mui/material";
import CourseClassificationServicesRelated from "~/components/ListJob-TypeJob/CourseClassification-ServicesRelated";
import Footer from "~/components/Footer";
import HeaderUserDetail from "~/components/ListJob-TypeJob/Header-ListJobTypeJob";

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
