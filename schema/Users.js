const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    collections: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Items",
      },
    ],
    avatar: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    mobileNumber: {
      isVerified: {
        type: Boolean,
        default: false,
      },
      number: {
        type: String,
        required: true,
        unique: true,
      },
      isWhatsapp: {
        type: Boolean,
        default: false,
      },
      countryCode: {
        type: String,
        required: true,
      },
    },
    addresses: [
      {
        isDefault: {
          type: Boolean,
          default: false,
        },
        label: {
          type: String,
          required: true,
        },
        addressLine1: {
          type: String,
          required: true,
        },
        addressLine2: {
          type: String,
          required: false,
        },
        pincode: {
          type: String,
          required: true,
        },
        city: {
          type: String,
          required: true,
        },
        state: {
          type: String,
          required: true,
        },
        landmark: {
          type: String,
          required: false,
        },
        lat: {
          type: Number,
          required: false,
        },
        long: {
          type: Number,
          required: false,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
        updatedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    isDeleted: {
      type: Boolean,
      default: false,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    prevNames: [
      {
        type: String,
        required: false,
      },
    ],
    prevAddresses: [
      {
        type: String,
        required: false,
      },
    ],
    prevMobileNumbers: [
      {
        type: String,
        required: false,
      },
    ],
    prevEmails: [
      {
        type: String,
        required: false,
      },
    ],
    prevAvatars: [
      {
        type: String,
        required: false,
      },
    ],
    prevCollections: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Items",
      },
    ],
  },
  {
    timestamps: true,
    _id: true,
    autoIndex: true,
  }
);

module.exports = mongoose.model("Users", userSchema);
