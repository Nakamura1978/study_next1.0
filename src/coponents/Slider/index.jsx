import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';
import styles from "@/coponents/Slider/Slider.module.css"

const imgData = [
    {
        src:"/ryudanhou.png",
        alt:"かわいい猫の画像 part1"
    },
    {
        src:"https://www.pakutaso.com/shared/img/thumb/shikun20220402_122123_TP_V.jpg",
        alt:"かわいい猫の画像 part2"
    },
    {
        src:"https://www.pakutaso.com/shared/img/thumb/sikun_20220402-180657-2_TP_V.jpg",
        alt:"かわいい猫の画像 part3"
    }
];

export const Slider = () => {
    return (
      <div className={styles.sliderBox}>
        <Splide
          aria-label="私のお気に入りの画像集"
          options={{
            autoplay: true, // 自動再生を有効
            interval: 3000, // 自動再生の間隔を3秒に設定
            rewind: true
          }}
        >
            <SplideSlide>
                <img className={styles.slideImg} src={imgData[0].src} alt={imgData[0].alt} />
            </SplideSlide>
            <SplideSlide>
                <img className={styles.slideImg} src={imgData[1].src} alt={imgData[1].alt} />
            </SplideSlide>
            <SplideSlide>
                <img className={styles.slideImg} src={imgData[2].src} alt={imgData[2].alt} />
            </SplideSlide>
            {/* {imgData.map(item => {
                <SplideSlide>
                    <img className={styles.slideImg} src={item.src} alt={item.alt} />
                </SplideSlide>
            })} */}
        </Splide>
      </div>
    );
  };