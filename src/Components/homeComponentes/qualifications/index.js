import React from "react";
import FakeHTML from "../../FakeHTML";
import {
  CardsForFakeHtml,
  Container,
  QualificationSection,

} from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import certificadoFrontEnd from "../../../imgs/qualifications/João Francisco Guarda Pozzer_page-0001.jpg";
import diplomaContabilidade from "../../../imgs/qualifications/DIPLOMA_page-0001.jpg";
import certificadoWizard from "../../../imgs/qualifications/CertificadoWizard-1_page-0001.jpg";

function Qualifications() {
  return (
    <Container id="qualifications">
      <FakeHTML text="<section>" />
      <QualificationSection>
        <CardsForFakeHtml>
          <FakeHTML text="<canva>" />

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            className="mySliders"
          >
            <SwiperSlide className="swiperSlide">
              <img src={certificadoFrontEnd} alt="Certificado Front-End" />
            </SwiperSlide>

            <SwiperSlide className="swiperSlide">
              <img src={certificadoWizard} alt="Certificado Ingles" />
            </SwiperSlide>

            <SwiperSlide className="swiperSlide">
              <img src={diplomaContabilidade} alt="Diploma Contabilidade" />{" "}
            </SwiperSlide>
          </Swiper>

          <FakeHTML text="</canva>" />
        </CardsForFakeHtml>
      </QualificationSection>
      <FakeHTML text="</section>" />
    </Container>
  );
}

export default Qualifications;
