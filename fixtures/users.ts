type User = {
  id: string
  name: string
  pronouns: string
  title: string
  company: string
  location: string
  site_code: string
  brand: string
}

const users: User[] = [
  {
    id: "1",
    name: "Salvador K. Mitchell",
    pronouns: "(HE/HIM)",
    title: "Director of Digital Marketing",
    company: "Awardish",
    location: "Raleigh-Durham, North Carolina Area",
    site_code: "forbes",
    brand: "Forbes",
  },
  {
    id: "2",
    name: "BJ Collins",
    pronouns: "(HE/HIM)",
    title: "Director of All",
    company: "Mine",
    location: "All over the place",
    site_code: "kiplinger",
    brand: "Kiplinger",
  },
]

export default users
