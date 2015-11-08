export const gfxSchema = {
  "title": "Gfx",
  "title": "Graphic driver blocklist entry.",
  "type": "object",
  "properties": {
    "os": {
      "type": "string",
      "title": "OS",
      "description": "The operating system identifier."
    },
    "vendor": {
      "type": "string",
      "title": "Vendor",
      "description": "A vendor identifier, eg. 0x1002"
    },
    "devices": {
      "type": "array",
      "title": "Devices",
      "description": "The list of impacted devices.",
      "items": {
        "type": "string",
        "title": "Device",
        "description": "A device identifier, eg. 0x9803"
      }
    },
    "feature": {
      "type": "string",
      "title": "Feature",
      "description": "The type of feature impacted."
    },
    "featureStatus": {
      "type": "string",
      "title": "Feature status",
      "description": "The feature status.",
      "enum": [
        "",
        "BLOCKED_DRIVER_VERSION",
        "BLOCKED_DEVICE"
      ]
    },
    "driverVersion": {
      "type": "string",
      "title": "Driver version",
      "description": "The driver version."
    },
    "driverVersionComparator": {
      "type": "string",
      "title": "Driver version comparator",
      "description": "The driver version comparator",
      "enum": [
        "EQUAL",
        "LESS_THAN",
        "LESS_THAN_OR_EQUAL",
        "GREATER_THAN",
        "GREATER_THAN_OR_EQUAL"
      ]
    }
  }
};
