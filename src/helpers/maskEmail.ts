const maskEmail = (email: string): string => {
  const [name, domain] = email.split("@")

  const visibleStart = name.slice(0, 2)
  const visibleEnd = name.slice(-1)

  const maskedName = `${visibleStart}*****${visibleEnd}`

  return `${maskedName}@${domain}`
}

export default maskEmail