const maskPhone = (phone: string): string => {
  const digits = phone.replace(/\D/g, "")

  const visibleStart = digits.slice(0, 2)
  const visibleEnd = digits.slice(-2)

  return `${visibleStart}*****${visibleEnd}`
}

export default maskPhone