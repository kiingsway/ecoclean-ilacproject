export interface IDeviceInfo {
  user_agent: string | null
  language: string | null
  timezone: string | null
  screen_width: number | null
  screen_height: number | null
  device_type: 'mobile' | 'tablet' | 'desktop' | null
  referrer: string | null
  platform: string | null
  connection_type: string | null
  page_url: string | null
  ip_address: string | null
}

export async function getDeviceInfo(): Promise<IDeviceInfo> {
  let ip_address: string | null = null
  let user_agent: string | null = null
  let language: string | null = null
  let timezone: string | null = null
  let screen_width: number | null = null
  let screen_height: number | null = null
  let device_type: 'mobile' | 'tablet' | 'desktop' | null = null
  let referrer: string | null = null
  let platform: string | null = null
  let connection_type: string | null = null
  let page_url: string | null = null

  try { ip_address = await fetch('/api/get-ip').then(r => r.json()).then(d => d.ip ?? null) } catch { /* empty */ }
  try { user_agent = navigator.userAgent } catch { /* empty */ }
  try { language = navigator.language } catch { /* empty */ }
  try { timezone = Intl.DateTimeFormat().resolvedOptions().timeZone } catch { /* empty */ }
  try { screen_width = window.screen.width } catch { /* empty */ }
  try { screen_height = window.screen.height } catch { /* empty */ }
  try {
    const width = window.screen.width
    device_type = width <= 768 ? 'mobile' : width <= 1024 ? 'tablet' : 'desktop'
  } catch { /* empty */ }
  try { referrer = document.referrer || null } catch { /* empty */ }
  try { platform = navigator.platform } catch { /* empty */ }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  try { connection_type = (navigator as any).connection?.effectiveType ?? null } catch { /* empty */ }
  try { page_url = window.location.href } catch { /* empty */ }

  return {
    user_agent,
    language,
    timezone,
    screen_width,
    screen_height,
    device_type,
    referrer,
    platform,
    connection_type,
    page_url,
    ip_address,
  }
}