import {Metadata} from "next"
import usersFixture from "../../../fixtures/users"
import Image from "next/image"
import Button from "ui/Button"
import Chip from "ui/Chip"
import About from "ui/About"
import {headers} from "next/headers"
import Header from "ui/Header"

function getUser(userId: string) {
  return usersFixture.find(user => user.id === userId)
}

function getUsers() {
  return usersFixture
}

type SiteData = {
  siteCode: string
  image: string
}

async function getSite(): Promise<SiteData> {
  // const headersList = headers()
  // const host = headersList.get("host")

  // const host = "forbes"
  const host = "kiplinger"

  const siteData = ((await import(`../../../config/${host}.ts`)) as any).default
  return siteData
}

type Params = {
  params: {
    userId: string
  }
}

export async function generateMetadata({params}: Params): Promise<Metadata> {
  const user = getUser(params.userId)
  return {
    title: `${user?.name} | ${user?.brand}`,
    description: `${user?.name} is a member of ${user?.brand}`,
  }
}

export default async function UserProfile({params}: Params) {
  const user = getUser(params.userId)

  const site = await getSite()

  return (
    <div data-theme={site?.siteCode}>
      <Header site={site} />

      <div className="flex px-8">
        <div className="flex h-fit w-1/4 flex-col items-center gap-1 bg-neutral-100 pb-4">
          <div className="relative -mt-14 grid h-40 w-40 place-items-center rounded-full bg-neutral-300">
            <span className="material-symbols-outlined !text-8xl text-neutral-400">
              person
            </span>

            <div className="absolute bottom-0 w-full rounded bg-background-secondary px-3 py-1 text-center text-xs text-white">
              Member Leader
            </div>
          </div>

          <div className="typography-condensed">{user?.name}</div>
          <div className="text-xs text-neutral-400">{user?.pronouns}</div>
          <div className="text-sm font-bold">{user?.title}</div>
          <div className="text-sm font-semibold">{user?.company}</div>
          <div className="text-xs">{user?.location}</div>

          <div className="my-4 h-0.5 w-1/2 bg-neutral-300"></div>

          <a href="/">Contact info</a>
        </div>

        <div className="w-3/4 px-6 py-8">
          <div className="font-bold uppercase">Member since Februrary 2020</div>
          <div className="flex items-center gap-4">
            <div className="font-bold uppercase">Skills</div>
            <Chip>Application / Product Development</Chip>
            <Chip>Business Development & Partnerships</Chip>
            <Chip>Design</Chip>
          </div>
          <div className="font-bold uppercase">About</div>
          <About>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida dictum fusce ut. Ultrices mi
            tempus imperdiet nulla malesuada pellentesque elit. Lacus laoreet
            non curabitur gravida arcu ac. Neque gravida in fermentum et
            sollicitudin ac orci. Platea dictumst quisque sagittis purus sit
            amet. Facilisi cras fermentum odio eu feugiat. Velit euismod in
            pellentesque massa placerat duis ultricies lacus. At lectus urna
            duis convallis convallis tellus. Commodo elit at imperdiet dui
            accumsan sit amet nulla. Porta lorem mollis aliquam ut porttitor leo
            a diam sollicitudin. Senectus et netus et malesuada. Interdum velit
            euismod in pellentesque massa placerat duis. Praesent tristique
            magna sit amet purus gravida. Est sit amet facilisis magna etiam.
            Sapien pellentesque habitant morbi tristique senectus et netus et.
            Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida dictum fusce ut. Ultrices mi
            tempus imperdiet nulla malesuada pellentesque elit. Lacus laoreet
            non curabitur gravida arcu ac. Neque gravida in fermentum et
            sollicitudin ac orci. Platea dictumst quisque sagittis purus sit
            amet. Facilisi cras fermentum odio eu feugiat. Velit euismod in
            pellentesque massa placerat duis ultricies lacus. At lectus urna
            duis convallis convallis tellus. Commodo elit at imperdiet dui
            accumsan sit amet nulla. Porta lorem mollis aliquam ut porttitor leo
            a diam sollicitudin. Senectus et netus et malesuada. Interdum velit
            euismod in pellentesque massa placerat duis. Praesent tristique
            magna sit amet purus gravida. Est sit amet facilisis magna etiam.
            Sapien pellentesque habitant morbi tristique senectus et netus et.
            Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi.
          </About>
        </div>
      </div>
    </div>
  )
}

// This function enables SSG
// export async function generateStaticParams() {
//   const users = getUsers()
//   return users.map(user => ({userId: user.id}))
// }
