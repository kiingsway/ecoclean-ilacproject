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

  return new Promise((resolve) => {
    setTimeout(() => {
      const fullName = `${contact.firstName} ${contact.lastName}`
      const maskedEmail = maskEmail(contact.email)

      resolve({
        success: true,
        message: `Contact request sent successfully for ${fullName} (${maskedEmail}).`
      })
    }, 1200)
  })
}