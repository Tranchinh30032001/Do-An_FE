import { Card } from "antd"

export const withBannerBig = (title, src, content, heading) => {
    return () => {
        return (
            <div>
                <h1 className="bg-bgNavbar text-white text-[28px] font-semibold py-2 px-6" >
                    {title}
                </h1>
                <Card
                    className="w-full"
                    cover={<img src={src} alt="banner" />}
                >
                    <Card.Meta title={heading} description={content} />
                </Card>
            </div>
        )
    }
}


export const withBannerSmall = (src, content, heading) => {
    return () => {
        return (
            <div>
                <div className="mb-4" >
                    <img className="w-full object-contain" src= {src} />
                </div>
                <Card
                    className="w-full"
                    cover={<img src={src} alt="banner" />}
                >
                    <Card.Meta title={heading} description={content} />
                </Card>
            </div>
        )
    }
}