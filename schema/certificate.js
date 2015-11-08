export const certificateSchema = {
  "title": "Certificate",
  "type": "object",
  "properties": {
    "issuerName": {
      "type": "string",
      "title": "Issuer name",
      "description": "The certificate issuer name."
    },
    "serialNumber": {
      "type": "string",
      "title": "Serial number",
      "description": "The certificate serial number."
    }
  }
};
