import Banner from "../features/home/Banner";
import { withBannerBig, withBannerSmall } from "../features/home/HocBanner";
import { dataBannerBig, dataBannerSmall } from "./dataBanner";

const BannerBig1 = withBannerBig({
  title: dataBannerBig[0].title,
  src: dataBannerBig[0].thumbnail,
  content: dataBannerBig[0].content,
  heading: dataBannerBig[0].heading,
});

const BannerBig2 = withBannerBig({
  title: dataBannerBig[1].title,
  src: dataBannerBig[1].thumbnail,
  content: dataBannerBig[1].content,
  heading: dataBannerBig[1].heading,
});
const BannerSmall1 = withBannerSmall({
  src: dataBannerSmall[0].thumbnail,
  content: dataBannerSmall[0].content,
  heading: dataBannerSmall[0].heading,
});
const BannerSmall2 = withBannerSmall({
  src: dataBannerSmall[1].thumbnail,
  content: dataBannerSmall[1].content,
  heading: dataBannerSmall[1].heading,
});
const BannerSmall3 = withBannerSmall({
  src: dataBannerSmall[2].thumbnail,
  content: dataBannerSmall[2].content,
  heading: dataBannerSmall[2].heading,
});
const BannerSmall4 = withBannerSmall({
  src: dataBannerSmall[3].thumbnail,
  content: dataBannerSmall[3].content,
  heading: dataBannerSmall[3].heading,
});

export const Banner1 = <Banner />;
export const Banner2 = Banner({ BigBanner: BannerBig2, SmallBanner1: BannerSmall3, SmallBanner4: BannerSmall2 });
