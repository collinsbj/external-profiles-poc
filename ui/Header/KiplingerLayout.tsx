import Image from "next/image"
import Button from "../Button"

type Props = {
  image: string
}

export default function KiplingerLayout({image}: Props) {
  return (
    <div
      className={
        "flex h-40 w-full items-center justify-between bg-background-primary px-4 pb-16 text-sm text-white"
      }
    >
      <div className="flex gap-4">
        <Button>Do I Qualify?</Button>

        <div className="flex flex-col items-center text-background-primary-text-accent">
          <span className="material-symbols-outlined">star</span>
          LOGIN
        </div>
      </div>

      <Image src={image} width={200} height={50} alt="Forbes Councils Logo" />
    </div>
  )
}
