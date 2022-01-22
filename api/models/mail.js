const mongoose = require("mongoose");

const Mail = new mongoose.Schema(
    {
        nomor: {
            type: String,
            unique: true,
            required: true,
        },
        tujuan: {
            type: String,
            required: true
        },
        resi: {
            type: String,
            required: true,
            unique: true,
        },
        hal: {
            type: String,
            required: true
        },
        tanggal: {
            type: String,
            required: true
        },
        kurir: {
            type: String,
            required: true
        },
        inputDate: {
            type: Date,
            required: true,
            default: Date.now
        },
        delivered: {
            type: String,
            required: false,
            default: 'False'
        }
    }, { collection: "Mails" }
);

// Duplicate the ID field. " when fetching, the api will add ID with the value of _id"
Mail.virtual('id').get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
Mail.set('toJSON', {
    virtuals: true
});

const MailModel = mongoose.model("Mails", Mail);

module.exports = MailModel

// {
//     "nomor": "12/WPJ/2021",
//     "tujuan": "KPP Jakar selatan",
//     "resi": "12162254245",
//     "hal": "Pembendungan aksi pembantaian kekacauan komunisme 1965",
//     "tanggal": "24/04/2021",
//     "kurir": "jne"
//   }