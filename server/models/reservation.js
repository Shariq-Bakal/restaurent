import mongoose from "mongoose";

const reservationSchema = mongoose.Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
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
    max: [10, "Maximum 10 guests allowed"] // Adjust based on your policy
  },
  table:Number,
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