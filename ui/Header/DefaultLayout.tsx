import Image from "next/image"
import Button from "ui/Button"

type Props = {
  image: string
}

export default function DefaultLayout({image}: Props) {
  return (
    <div
      className={
        "relative flex h-40 w-full items-center justify-end gap-4 bg-background-primary px-4 pb-16 text-sm text-white"
      }
    >
      <Image
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, calc(-50% - 32px))",
        }}
        src={image}
        width={200}
        height={50}
        alt="Forbes Councils Logo"
      />

      <Button>Do I Qualify?</Button>

      <div className="flex flex-col items-center text-background-primary-text-accent">
        <span className="material-symbols-outlined">star</span>
        LOGIN
      </div>
    </div>
  )
}
