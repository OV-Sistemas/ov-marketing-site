import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}





export const lintWhatsApp="https://api.whatsapp.com/send/?phone=5511960303569&text=Ol%C3%A1%2C+tenho+interesse+em+criar+um+projeto+ou+fazer+manuten%C3%A7%C3%A3o+com+a+OV+Sistemas.&type=phone_number&app_absent=0"