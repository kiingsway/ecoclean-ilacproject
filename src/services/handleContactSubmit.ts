import { getDeviceInfo } from '../helpers/getDeviceInfo'
import maskEmail from '../helpers/maskEmail'
import maskPhone from '../helpers/maskPhone'
import { supabase } from '../lib/supabase'
import type { IContactInfo } from '../types/interfaces'

export default async function handleContactSubmit(contact: IContactInfo): Promise<string> {
  const deviceInfo = await getDeviceInfo()

  const payload = {
    first_name: contact.firstName,
    last_name: contact.lastName,
    email: contact.email,
    phone: contact.phone,
    service: contact.service || null,
    message: contact.message || null,
    ...deviceInfo,
  }

  const { error } = await supabase.from('contacts').insert(payload)

  if (error) {
    console.error('Erro ao salvar contato:', error?.message)
    throw new Error(error?.message)
  }

  const fullName = `${contact.firstName} ${contact.lastName}`
  const maskedEmail = maskEmail(contact.email)
  const maskedPhone = maskPhone(contact.phone)
  const service = contact.service || "Not specified"

  return `Your contact request has been successfully submitted. Details: ${fullName} (${maskedEmail}), Phone: ${maskedPhone}, Service: ${service}.`
}