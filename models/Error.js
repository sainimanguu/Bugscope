const mongoose = require("mongoose");

const errorSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    stack: {
      type: String,
      required: true,
    },
    severity: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
      required: true,
      index: true,
    },
    environment: {
      type: String,
      enum: ["development", "staging", "production"],
      default: "development",
      required: true,
      index: true,
    },
    count: {
      type: Number,
      default: 1,
      min: 1,
    },
    projectId: {
      type: String,
      required: true,
      index: true,
    },
    firstSeen: {
      type: Date,
      default: Date.now,
      index: true,
    },
    lastSeen: {
      type: Date,
      default: Date.now,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

errorSchema.index({
  projectId: 1,
  message: 1,
  stack: 1,
  severity: 1,
  environment: 1,
});

errorSchema.index({
  projectId: 1,
  severity: 1,
  environment: 1,
  lastSeen: -1,
});

module.exports = mongoose.model("Error", errorSchema);