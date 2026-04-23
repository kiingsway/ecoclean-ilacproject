import maskEmail from "../helpers/maskEmail";
import maskPhone from "../helpers/maskPhone";
import type { IContactInfo } from "../types/interfaces"

export function handleContactSubmitFake(
  contact: IContactInfo
): Promise<{ success: boolean; message: string }> {
  
  return new Promise((resolve) => {
    setTimeout(() => {
      const fullName = `${contact.firstName} ${contact.lastName}`
      const maskedEmail = maskEmail(contact.email)
      const maskedPhone = maskPhone(contact.phone)
      const service = contact.service || "Not specified"

      resolve({
        success: true,
        message: `Your contact request has been successfully submitted. Details: ${fullName} (${maskedEmail}), Phone: ${maskedPhone}, Service: ${service}.`
      })
    }, 1200)
  })
}