import "./Gallery.css";
import ImgGallery from "./Components/ImgGallery/ImgGallery";
import Footer from "./Components/Footer/Footer";
import Gap from "./Components/Gap/Gap";
import UrHere from "./Components/UrHere/UrHere";
import BackToHomeBTN from "./Components/BackToHomeBTN/BackToHomeBTN";

const Gallery = () => {
  return (
    <>
      <BackToHomeBTN />
      <UrHere pageName="Gallery_Demo_Website" />
      <div className="gallerycontainer">
        <div class="container2">
          <ImgGallery
            titles="Book Name 01"
            img={"https://picsum.photos/400/300?random=1"}
            to={"#"}
            idrt={""}
          />
          <ImgGallery
            titles="Book Name 02"
            img={"https://picsum.photos/400/300?random=2"}
            to="#"
            idrt={""}
          />
          <ImgGallery
            titles="Book Name 03"
            img={"https://picsum.photos/400/300?random=3"}
            to="#"
            idrt={""}
          />
          <ImgGallery
            titles="Book Name 04"
            img={"https://picsum.photos/400/300?random=4"}
            to="#"
            idrt={""}
          />
          <ImgGallery
            titles="Book Name 05"
            img={"https://picsum.photos/400/300?random=5"}
            to="#"
            idrt={"rt"}
          />
          <ImgGallery
            titles="Book Name 06"
            img={"https://picsum.photos/400/300?random=6"}
            to="#"
            idrt={""}
          />
          <ImgGallery
            titles="Book Name 07"
            img={"https://picsum.photos/400/300?random=7"}
            to="#"
            idrt={""}
          />
          <ImgGallery
            titles="Book Name 08"
            img={"https://picsum.photos/400/300?random=8"}
            to="#"
            idrt={""}
          />
          <ImgGallery
            titles="Book Name 09"
            img={"https://picsum.photos/400/300?random=9"}
            to="#"
            idrt={""}
          />
          <ImgGallery
            titles="Book Name 10"
            img={"https://picsum.photos/400/300?random=10"}
            to="#"
            idrt={""}
          />
          <ImgGallery
            titles="Book Name 11"
            img={"https://picsum.photos/400/300?random=11"}
            to="#"
            idrt={""}
          />
          <ImgGallery
            titles="Book Name 12"
            img={"https://picsum.photos/400/300?random=12"}
            to="#"
            idrt={""}
          />
          <ImgGallery
            titles="Book Name 13"
            img={"https://picsum.photos/400/300?random=13"}
            to="#"
            idrt={""}
          />
          <ImgGallery
            titles="Book Name 14"
            img={"https://picsum.photos/400/300?random=14"}
            to="#"
            idrt={""}
          />
          <ImgGallery
            titles="Book Name 15"
            img={"https://picsum.photos/400/300?random=15"}
            to="#"
            idrt={""}
          />
          <ImgGallery
            titles="Book Name 16"
            img={"https://picsum.photos/400/300?random=16"}
            to="#"
            idrt={""}
          />
        </div>
      </div>
      <Gap />
      <Gap />
      <Footer />
    </>
  );
};

export default Gallery;
