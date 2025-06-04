import mongoose from "mongoose";

const reservationSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Full name is required"],
    minlength: [4, "Name must be at least 4 characters"],
    maxlength: [90, "Name cannot exceed 90 characters"],
    trim: true
  },
 date: {
  type: Date,
  required: [true, "Reservation date is required"],
  validate: {
    validator: function(value) {
      console.log("Received date:", value);
      console.log("Current date:", new Date());
      console.log("Is future date?", value > new Date());
      return value > new Date();
    },
    message: "Reservation date must be in the future"
  }
},
  timeSlot: {
    type: String,
    required: [true, "Time slot is required"],
    enum: {
      values: ["lunch", "dinner", "breakfast"],
      message: "Invalid time slot"
    }
  },
  totalGuests: {
    type: Number,
    required: [true, "Number of guests is required"],
    min: [1, "Must have at least 1 guest"],
    max: [10, "Maximum 20 guests allowed"] // Adjust based on your policy
  },
  emailAddress: {
    type: String,
    required: [true, "Email is required"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid email"
    ],
    lowercase: true,
    trim: true
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone number is required"],
    match: [
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      "Please enter a valid phone number"
    ]
  },
  specialRequests: {
    type: String,
    maxlength: [500, "Special requests cannot exceed 500 characters"]
  },
  status: {
    type: String,
    enum: ["pending", "confirmed", "cancelled", "completed"],
    default: "pending"
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
  collection: "reservations" // Explicit collection name
});

// Add index for frequently queried fields
reservationSchema.index({ date: 1, timeSlot: 1 });
reservationSchema.index({ emailAddress: 1 });

const Reservation = mongoose.model("Reservation", reservationSchema);
export default Reservation;