const express = require('express');
const router = express.Router();
//import model/schema
const MailModel = require('../models/mail.js')
const xlsx = require('xlsx')
// import puppeteer
const puppeteer = require('puppeteer')



// !GET
// scrape received mail id
// router.get('/mails/scrape/:id', (req,res) => {
//     const mailId = req.params.id




//     // SCRAPE
//     puppeteer.launch({ headless: false }).then(async function (browser) {
//         const page = await browser.newPage();
//         await page.goto('https://www.posindonesia.co.id/id/tracking');

//         // Closing the Puppeteer controlled headless browser
//         await browser.close();
//     });
// })


// get all mails
router.get('/mails', (req, res) => {
    MailModel.find({}, (err, data) => {
        if (err) {
            res.json({ message: "Can't fetch data!", messagebody: "No Mails Found!" })
        } else {
            res.json(data)
        }
    })
})
// get all mails - xlsx
router.get('/mails/excel', async (req, res) => {
    try {
        let allMails = await MailModel.find({}, (err, data) => {
            if (err) {
                res.json({ message: "Can't fetch data!", messagebody: "No Mails Found!" })
            } else {
                return data
            }
        }).clone().catch(function (err) { console.log(err) })

        let stringify = JSON.stringify(allMails)
        stringify = JSON.parse(stringify)
        const newBook = xlsx.utils.book_new()
        const newSheet = xlsx.utils.json_to_sheet(stringify)
        const downloadXls = 'dataSurat.xlsx'
        xlsx.utils.book_append_sheet(newBook, newSheet, 'Data Surat')
        xlsx.writeFile(newBook, downloadXls)
        res.set({
            'content-type': 'application/octet-stream',
            'content-disposition': 'attachment;filename=' + encodeURI(downloadXls)
        })
        res.download('./dataSurat.xlsx')
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

})



// get mails with specified criteria
router.get('/mails/search/:kek', async (req, res) => {

    const searched = await MailModel.find({})
    try {
        res.status(201).json(searched)
    } catch (error) {
        res.status(500).json(error.message)
    }
})

//get individual mail
router.get('/mails/:id', async (req, res) => {
    try {
        const mail = await MailModel.findById(req.params.id)
        res.status(201).json(mail)
    } catch (error) {
        res.json({ message: 'Not Found!', messagebody: `can't find data with assigned criteria` })
    }
})

// ! DELETE
router.delete('/mails/:id', async (req, res) => {
    try {
        mail = await MailModel.findById(req.params.id)
        if (mail === null) {
            res.status(404).json({ message: 'Mail doesnt exist!', messagebody: `${mail.nomor} is no longer exist..` })
        } else {
            await mail.remove()
            res.status(200).json({ message: 'Mail removed!', messagebody: `${mail.nomor} is successfully removed..` })
        }
    } catch (error) {
        res.status(500).json({ message: 'internal server error!', messagebody: `server is going on some trouble..` })
    }
})



// !POSTS


router.post('/mails', async (req, res) => {

    const mail = new MailModel(req.body)

    try {
        await mail.save()
        res.status(201).json({ message: `success!`, messagebody: `${req.body.nomor} is saved!`, mail: mail })
    } catch (error) {
        const body = error.message

        if (body.includes('duplicate')) {
            res.status(400).json({ message: 'Duplicates!', messagebody: 'the same data (nomor/resi) has already existed.' })
        }
        else {
            res.status(400).json({ message: 'Error!', messagebody: 'please completely fill all the forms' })
        }

    }
})


// ! PATCH
router.patch('/mails/:id', async(req, res) => {
    try {
        let id = req.params.id
        let updates = req.body
        // pass options so that the data(json) returned is the updated version
        let opt = {new:true}

        let updated = await MailModel.findByIdAndUpdate(id, updates, opt)
        
        res.status(201).json({message:'Success', messagebody:'data updated!', data : updated})
    } catch (error) {
        res.status(400).json({message:'failed to update data!', messagebody:'something went wrong ! :('})
    }
})
module.exports = router;