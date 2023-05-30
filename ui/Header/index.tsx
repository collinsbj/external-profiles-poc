import DefaultLayout from "./DefaultLayout"
import KiplingerLayout from "./KiplingerLayout"

type Props = {
  site: {
    siteCode: string
    image: string
  }
}

export default function Header({site}: Props) {
  const {image, siteCode} = site

  switch (siteCode) {
    case "kiplinger":
      return <KiplingerLayout image={image} />
    default:
      return <DefaultLayout image={image} />
  }
}
