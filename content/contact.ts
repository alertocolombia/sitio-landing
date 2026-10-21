// Public contact details shared by the website, structured data and demo requests.
export const contact = {
  email: "hola@sitio.com.co",
  phone: "+57 300 126 6871",
  whatsappNumber: "573001266871",
} as const;

export const whatsappUrl = (message: string) =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
