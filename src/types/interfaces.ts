export type IServices =
  'Residential Cleaning' |
  'Deep Cleaning' |
  'Office Cleaning' |
  'Move In / Move Out' |
  'Recurring Service' |
  'Other'

export interface IContactInfo {
  firstName: string
  lastName: string
  email: string
  phone: string
  service: IServices | ''
  message: string
}