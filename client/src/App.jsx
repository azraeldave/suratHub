import React, { useState } from 'react'
import GlobalStyle from './components/styles/GlobalStyle'
import Navbar from './components/Navbar'
import Main from './components/Contents/Main'
import Modal from './components/Modal'

export default function App() {
  //  MODAL ==============================================
  // login bar
  const [loginModal, setLoginModal] = useState(false)
  // Mail modal
  const [addmailModal, setaddmailModal] = useState(false)

  // SURAT OBJECTS ==========================================
  const data = [
    { nomor: '124-WPJ/29/KP.0404/2021', tujuan: 'jakarta pusat', tanggal: '12/12/2021', hal: 'some random bullshit going on', resi: 135135413, scraping: ['Bruh kek', 'bruh jek', 'bruh ketek'] },
    { nomor: '69-WPJ/29/KP.0404/2021', tujuan: 'jakarta pusat', tanggal: '24/12/2021', hal: 'some random bullshit going on', resi: 135135413, scraping: ['Bruh kek', 'bruh jek', 'bruh ketek'] },
    { nomor: '15-WPJ/29/KP.0404/2020', tujuan: 'jakarta selatan', tanggal: '15/12/2021', hal: 'some random bullshit going on', resi: 135135413, scraping: ['Bruh kek', 'bruh jek', 'bruh ketek'] },
    { nomor: '462-WPJ/29/KP.0404/2020', tujuan: 'trenggalek', tanggal: '05/10/2021', hal: 'some random bullshit going on', resi: 123141, scraping: ['Bruh kek', 'bruh jek', 'bruh ketek'] },
    { nomor: '42-WPJ/29/KP.0404/2021', tujuan: 'bruhCity 25', tanggal: '11/12/2021', hal: 'some random bullshit going on', resi: 13511341, scraping: ['Bruh kek', 'bruh jek', 'bruh ketek'] },
    { nomor: '245-WPJ/29/KP.0404/2021', tujuan: 'bruhCity 21', tanggal: '11/12/2021', hal: 'some random bullshit going on', resi: 135135413, scraping: ['Bruh kek', 'bruh jek', 'bruh ketek'] },
    { nomor: '242-WPJ/29/KP.0404/2021', tujuan: 'bruhCity 13', tanggal: '12/12/2021', hal: 'some random bullshit going on', resi: 1513413, scraping: ['Bruh kek', 'bruh jek', 'bruh ketek'] },
    { nomor: '246-WPJ/29/KP.0404/2021', tujuan: 'bruhCity 54', tanggal: '11/12/2021', hal: 'some random bullshit going on', resi: 13511545, scraping: ['Bruh kek', 'bruh jek', 'bruh ketek'] }
  ];

  // FORM HANDLING =========================================
  const [formInput, setFormInput] = useState({
    nomor: '',
    tujuan: '',
    resi: '',
    hal: '',
    tanggal: '',
    kurir: ''
  })

  // submit new mail
  const submitFormInput = (event) => {
    event.preventDefault();
    console.log(formInput)
  }



  // DATABASE
  const [Surat, setSurat] = useState(data)



  return (
    <div>
      <GlobalStyle />
      <Navbar cancelLogin={() => { setLoginModal(false) }} activateLogin={() => console.log('asdasd')} loginStatus={loginModal} loginClick={() => setLoginModal(true)} />
      <Main data={data} addMailModal={() => {
        setaddmailModal(true)
      }} />
      {addmailModal ?
        <Modal closeNewMail={() => { setaddmailModal(false) }}
          nomor={formInput.nomor} nomorChange={event => setFormInput({ ...formInput, nomor: event.target.value })}

          tujuan={formInput.tujuan} tujuanChange={e => setFormInput({ ...formInput, tujuan: e.target.value })}
          resi={formInput.resi} resiChange={e => setFormInput({ ...formInput, resi: e.target.value })}
          hal={formInput.hal} halChange={e => setFormInput({ ...formInput, hal: e.target.value })}
          tanggal={formInput.tanggal} tanggalChange={e => setFormInput({ ...formInput, tanggal: e.target.value })}
          kurirInput={(e) => setFormInput({ ...formInput, kurir: e.target.value })}
          submitNewMail={submitFormInput}
        />
        : null}
    </div>
  )
}
