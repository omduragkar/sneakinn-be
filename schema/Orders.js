const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [
    {
      articleType: {
        type: String,
        enum: ["sneakers", "slippers", "other"],
        required: true,
      },
      state: {
        type: String,
        enum: ["pending", "shipped", "delivered", "cancelled"],
        default: "pending",
      },
      services: [
        {
          serviceType: {
            type: String,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
        },
      ],
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      item: {
        itemName: {
          type: String,
          required: true,
        },
        itemPhoto: {
          type: String,
          required: true,
        },
        itemState: {
          type: String,
          required: false,
        },
        itemType: {
          type: String,
          enum: [
            "SNEAKER",
            "GEAR",
            "CHAPPAL",
            "SANDALS",
            "HEELS",
            "BOOTS",
            "SLIPPERS",
            "OTHER",
          ],
          required: true,
        },
        collections: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Items",
          },
        ],
        profilePicture: {
          type: String,
          required: false,
        },
      },
    },
  ],
  additionalCharges: {
    chargeDetails: [
      {
        chargeType: {
          type: String,
          required: true,
        },
        chargeAmount: {
          type: Number,
          required: true,
        },
        chargeDescription: {
          type: String,
          required: true,
        },
        chargeStatus: {
          type: String,
          enum: ["pending", "completed", "failed"],
          default: "pending",
        },
        isAddedInBill: {
          type: Boolean,
          default: false,
        },
      },
    ],
    totalCharges: {
      type: Number,
      required: true,
    },
    totalChargesPaid: {
      type: Number,
      required: true,
    },
    totalChargesPending: {
      type: Number,
      required: true,
    },
    totalChargesRefunded: {
      type: Number,
      required: true,
    },
  },
  refunds: {
    refundDetails: [
      {
        refundType: {
          type: String,
          required: true,
        },
        refundStatus: {
          type: String,
          enum: ["pending", "completed", "failed"],
          default: "pending",
        },
        amount: {
          type: Number,
          required: true,
        },
        refundReason: {
          type: String,
          required: true,
        },
        refundStatus: {
          type: String,
          enum: ["pending", "completed", "failed"],
          default: "pending",
        },
        refundDate: {
          type: Date,
          default: Date.now,
        },
        refundAmount: {
          type: Number,
          required: true,
        },
        refundInitiatedBy: {
          type: String,
          enum: ["user", "admin"],
          required: true,
        },
        refundInitiatedDate: {
          type: Date,
          default: Date.now,
        },
        refundProcessedDate: {
          type: Date,
          default: Date.now,
        },
        refundProcessedBy: {
          type: String,
          enum: ["user", "admin"],
          required: true,
        },
        refundProcessedStatus: {
          type: String,
          enum: ["pending", "completed", "failed"],
          default: "pending",
        },
      },
    ],
    totalRefundsMade: {
      type: Number,
      required: true,
    },
    totalRefundsPaid: {
      type: Number,
      required: true,
    },
    totalRefundsPending: {
      type: Number,
      required: true,
    },
    totalRefundsRefunded: {
      type: Number,
      required: true,
    },
  },
  paymentDetails: {
    payments: [
      {
        paymentType: {
          type: String,
          enum: ["COD", "UPI", "CARD"],
          required: true,
        },
        paymentStatus: {
          type: String,
          enum: ["pending", "completed", "failed"],
          default: "pending",
        },
        amount: {
          type: Number,
          required: true,
        },
      },
    ],
    totalAmountMade: {
      type: Number,
      required: true,
    },
    totalAmountPaid: {
      type: Number,
      required: true,
    },
    totalAmountPending: {
      type: Number,
      required: true,
    },
    totalAmountRefunded: {
      type: Number,
      required: true,
    },
    discounts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Offers",
      },
    ],
  },
  orderStatus: {
    type: String,
    enum: ["pending", "shipped", "delivered", "cancelled"],
    default: "pending",
  },
  uniqueOrderId: {
    type: String,
    required: true,
    unique: true,
    default: function () {
      return "ORD" + Math.floor(Math.random() * 1000000);
    },
  },
  orderStages: [
    {
      type: Object,
    },
  ],
},{
    timestamps: true,
    versionKey: false,
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    },
    id: false,
    minimize: false,
    strict: false,
    validateBeforeSave: true,
    runValidators: true,
    optimisticConcurrency: true,
    strictQuery: true,
    autoIndex: true,
    autoCreate: true,
    collection: "orders",
    capped: false,
    shardKey: {
        orderId: 1,
    },
    discriminatorKey: "orderType",
    indexes: [
        {
            unique: true,
            partialFilterExpression: { orderStatus: { $exists: true } },
        },
    ],
});

module.exports = mongoose.model("Orders", OrderSchema);
