import type { IContactInfo } from "../types/interfaces"

export function handleContactSubmit(
  contact: IContactInfo
): Promise<{ success: boolean; message: string }> {
  const maskEmail = (email: string) => {
    const [name, domain] = email.split("@")

    const visibleStart = name.slice(0, 2)
    const visibleEnd = name.slice(-1)

    const maskedName = `${visibleStart}*****${visibleEnd}`

    return `${maskedName}@${domain}`
  }

  const maskPhone = (phone: string) => {
    const digits = phone.replace(/\D/g, "")

    const visibleStart = digits.slice(0, 2)
    const visibleEnd = digits.slice(-2)

    return `${visibleStart}*****${visibleEnd}`
  }

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