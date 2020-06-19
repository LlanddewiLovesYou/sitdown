import { data } from '../data'

const roll = () => {
  const roll = Math.floor(Math.random() * 10)
  if(roll === 0) {
    return 10
  } else {
    return roll
  }
}

export const fetchSitDown = () => {
  return data[roll() - 1]
}
