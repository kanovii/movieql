

export const people = [
    {
    id: "0",
    name: "kanovii",
    age: 24
    },
    {
      id: "1",
      name: "sojin",
      age: 24
    },
  ]

export const getById = ( id: String) => {
  const filteredPeople = people.filter((personss) => personss.id === String(id))
  return filteredPeople[0]
}