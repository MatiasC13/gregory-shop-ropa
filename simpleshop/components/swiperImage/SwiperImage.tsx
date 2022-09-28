// import {Image} from "@chakra-ui/react"
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
// import required modules
import { Autoplay} from "swiper";
import { rgbDataURL } from "utils/helper";
import { customColor } from "utils/ownerData";

interface props{

  title:string;
  image : string[];
}

const SwiperImage = ({title, image}:props) => {
  return (
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        freeMode={true}
        modules={[Autoplay]}
        className="mySwiper"
      >


{image &&
  image.map((i ,key)=>(
    <SwiperSlide key={key}>
      <Image
        unoptimized
        placeholder="blur"
        blurDataURL={rgbDataURL(customColor)}
        // style={style}
        src={i}
        alt={title}
        // src={product.image}

        width={128}
        height={128}
        objectFit={"cover"}
        layout={"responsive"}
      // onClick={() => setSelectedProduct(product)}
      />
    </SwiperSlide>




  ))
}

      </Swiper>
  );
};

export default SwiperImage;
