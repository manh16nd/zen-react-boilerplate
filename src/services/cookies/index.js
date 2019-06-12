import { Cookies } from 'react-cookie'

const cookies = new Cookies()

export function getCookie(name) {
    return cookies.get(name) || null
}