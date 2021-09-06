import { people, getById } from "./db"

const resolvers = {
  Query: {
    people: () => people,
    person: (_: any, { id }: any) => getById(id),
  }
}

export default resolvers