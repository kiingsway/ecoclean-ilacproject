import type { IContactInfo, IServices } from "../types/interfaces"
import generateRandomPhoneNumber from "./randomizers/generateRandomPhoneNumber"

const firstNames = ["Lucas", "Mariana", "João", "Alice", "Roberto", "Carla", "Diego", "Beatriz", "Gabriel", "Fernanda", "Ricardo", "Juliana", "Henrique"]
const lastNames = ["Silva", "Oliveira", "Santos", "Ferreira", "Gomes", "Alves", "Rocha", "Martins", "Costa", "Pereira", "Souza", "Lima", "Carvalho"]

const messages = [
  "I would like to request a quote for my project.",
  "I need a deep cleaning service for my apartment this weekend.",
  "Could you please provide a quote for office carpet cleaning?",
  "I'm looking for a recurring weekly cleaning service for my house.",
  "Is it possible to schedule a post-construction cleaning next Tuesday?",
  "I need a move-out cleaning service for a three-bedroom property.",
  "My kitchen cabinets need a thorough deep clean and degreasing.",
  "We are looking for window cleaning services for our storefront.",
  "I need an emergency cleaning service due to a spill in the living room.",
  "Do you offer eco-friendly sanitization services for bathrooms?",
  "I want to book a one-time intensive cleaning for the entire house."
]

const services: IServices[] = [
  'Residential Cleaning',
  'Deep Cleaning',
  'Office Cleaning',
  'Move In / Move Out',
  'Recurring Service',
  'Other',
]

const pick = <T,>(arr: T[]) =>
  arr[Math.floor(Math.random() * arr.length)]

const normalize = (value: string) =>
  value
    .toLowerCase()
    .replace(/\s+/g, ".")
    .replace(/[^a-z.]/g, "")

export function generateRandomContactInfo(): IContactInfo {
  const firstName = pick(firstNames)
  const lastName = pick(lastNames)

  const email = `${normalize(firstName)}.${normalize(lastName)}@email.com`

  return {
    firstName,
    lastName,
    email,
    phone: generateRandomPhoneNumber(),
    service: pick(services),
    message: pick(messages)
  }
}