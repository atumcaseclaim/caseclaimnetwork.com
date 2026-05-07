const TD_BASE = 'https://atum-legal.trackdrive.com/api/v1/leads'

declare global {
  interface Window {
    xxTrustedFormCertUrl?: string
  }
}

export interface LeadPayload {
  token: string
  first_name: string
  last_name: string
  email: string
  caller_id: string  // phone
  state: string
  city?: string
  // qualifier fields (vary by campaign)
  [key: string]: string | undefined
}

export async function submitLead(payload: LeadPayload): Promise<{ success: boolean; message?: string }> {
  try {
    // Attach TrustedForm cert URL if available
    const certUrl = document.querySelector('input[name="xxTrustedFormCertUrl"]') as HTMLInputElement | null
    const trustedFormUrl = certUrl?.value || window.xxTrustedFormCertUrl || ''

    const body = new URLSearchParams()
    Object.entries(payload).forEach(([k, v]) => {
      if (v !== undefined && v !== '') body.append(k, v)
    })
    if (trustedFormUrl) body.append('xxTrustedFormCertUrl', trustedFormUrl)
    body.append('tcpa_opt_in', 'true')
    body.append('source_url', window.location.href)
    body.append('ip_address', '') // will be filled server-side by TD

    const res = await fetch(TD_BASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    })

    if (res.ok) {
      return { success: true }
    }
    const text = await res.text()
    return { success: false, message: text }
  } catch (err) {
    console.error('TrackDrive submission error:', err)
    return { success: false, message: 'Network error' }
  }
}
