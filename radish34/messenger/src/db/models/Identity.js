const mongoose = require('mongoose');
const { encrypt, decrypt } = require('../../utils/encryptUtils');

const IdentitySchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      lowercase: true,
      trim: true,
    },
    keyId: {
      type: String,
      required: true,
    },
    description: String,
    publicKey: {
      type: String,
      required: true,
    },
    privateKey: {
      type: String,
      required: true,
      set: encrypt,
      get: decrypt,
    },
    createdDate: String,
  },
  {
    collection: 'Identities',
    versionKey: false,
  }
);

const Identities = mongoose.model('Identities', IdentitySchema);

module.exports = Identities;
