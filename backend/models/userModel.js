import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
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
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

//we call the matchPassword on the specific user and we can access their password using this.password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//before we save, we encrypt the password
userSchema.pre('save', async function (next) {
  //we dont want line 44,45 to run if password is not modified as it would create a new hash for the same password, so we skip using "next()"

  //this runs when the password is not modified, this skips using "next()" and prevents from hashing the same password
  if (!this.isModified('password')) {
    next();
  }
  // we use genSalt(x) which takes in the number of rounds as a parameter(x), we need salt to hash the password asynchronously
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

export default User;
