import React, { useState, useEffect } from 'react'
import GlobalStyle from './components/styles/GlobalStyle'
import Navbar from './components/Navbar'
import Main from './components/Contents/Main'
import ModalNewMail from './components/ModalNewMail'
import ModalAddMailConfirmation from './components/ModalAddMailConfirmation'
import ModalEditMail from './components/ModalEditMail'
import Notification from './components/Notification'
import axios from 'axios'

export default function App() {
  //  MODAL ==============================================
  // login bar
  const [loginModal, setLoginModal] = useState(false)
  // Mail modal
  const [addmailModal, setaddmailModal] = useState(false)
  // Edit existing email confirmation Modal
  const [newMailModal, setnewMailModal] = useState(false)
  // Edit existing mail
  const [EditMailModal, setEditMailModal] = useState(false)
  // Add new mail confirmation
  const [addNewMailConfirmation, setaddNewMailConfirmation] = useState(false)
  // Modal delete Confirmation
  const [deleteModal, setonDeleteModal] = useState(false)

  //  notification
  const [notification, setNotification] = useState(true)
  const [notifMessage, setnotifMessage] = useState({ title: 'Caution!', message: 'yeah whatever dude!' })

  // LOADING
  const [loading, setLoading] = useState(true);



  // SURAT OBJECTS ==========================================
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3002/api/mails')
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
      .catch(err => {
        console.log(err);
        setnotifMessage({ title: 'Server is ...!', message: 'Not sure whats going on.. :(' })
      })
  }, []);
  // const [data, setData] = useState([
  //   { id: 1, nomor: '124-WPJ/29/KP.0404/2021', tujuan: 'jakarta pusat', tanggal: '12/12/2021', hal: 'some random bullshit going on', resi: '13556513', delivered: false },
  //   { id: 2, nomor: '69-WPJ/29/KP.0404/2021', tujuan: 'jakarta pusat', tanggal: '24/12/2021', hal: 'some random bullshit going on', resi: '135133513', delivered: true },
  //   { id: 3, nomor: '15-WPJ/29/KP.0404/2020', tujuan: 'jakarta selatan', tanggal: '15/12/2021', hal: 'some random bullshit going on', resi: '1357675413', delivered: false },
  //   { id: 4, nomor: '462-WPJ/29/KP.0404/2020', tujuan: 'trenggalek', tanggal: '05/10/2021', hal: 'some random bullshit going on', resi: '123748571', delivered: true }
  // ])

  // [
  //   { nomor: '124-WPJ/29/KP.0404/2021', tujuan: 'jakarta pusat', tanggal: '12/12/2021', hal: 'some random bullshit going on', resi: 135135413, scraping: ['Bruh kek', 'bruh jek', 'bruh ketek'] },
  //   { nomor: '69-WPJ/29/KP.0404/2021', tujuan: 'jakarta pusat', tanggal: '24/12/2021', hal: 'some random bullshit going on', resi: 135135413, scraping: ['Bruh kek', 'bruh jek', 'bruh ketek'] },
  //   { nomor: '15-WPJ/29/KP.0404/2020', tujuan: 'jakarta selatan', tanggal: '15/12/2021', hal: 'some random bullshit going on', resi: 135135413, scraping: ['Bruh kek', 'bruh jek', 'bruh ketek'] },
  //   { nomor: '462-WPJ/29/KP.0404/2020', tujuan: 'trenggalek', tanggal: '05/10/2021', hal: 'some random bullshit going on', resi: 123141, scraping: ['Bruh kek', 'bruh jek', 'bruh ketek'] },
  //   { nomor: '42-WPJ/29/KP.0404/2021', tujuan: 'bruhCity 25', tanggal: '11/12/2021', hal: 'some random bullshit going on', resi: 13511341, scraping: ['Bruh kek', 'bruh jek', 'bruh ketek'] },
  //   { nomor: '245-WPJ/29/KP.0404/2021', tujuan: 'bruhCity 21', tanggal: '11/12/2021', hal: 'some random bullshit going on', resi: 135135413, scraping: ['Bruh kek', 'bruh jek', 'bruh ketek'] },
  //   { nomor: '242-WPJ/29/KP.0404/2021', tujuan: 'bruhCity 13', tanggal: '12/12/2021', hal: 'some random bullshit going on', resi: 1513413, scraping: ['Bruh kek', 'bruh jek', 'bruh ketek'] },
  //   { nomor: '246-WPJ/29/KP.0404/2021', tujuan: 'bruhCity 54', tanggal: '11/12/2021', hal: 'some random bullshit going on', resi: 13511545, scraping: ['Bruh kek', 'bruh jek', 'bruh ketek'] }
  // ]

  // FORM HANDLING =========================================
  const [formInput, setFormInput] = useState({
    id: 0,
    nomor: '',
    tujuan: '',
    resi: '',
    hal: '',
    tanggal: '',
    kurir: ''
  })

  //SEARCH OPTIONS
  const [showSearchBar, setshowSearchBar] = useState(false)
  const [searchState, setsearchState] = useState('')
  const [searchContent, setsearchContent] = useState('')


  // submit new mail
  const confirmInput = async () => {
    axios.post('http://localhost:3002/api/mails', formInput)
      .then((res) => {
        setData([...data, res.data.mail])
        setnotifMessage({ title: 'data saved!', message: 'data bapak kau dah kusimpen njeng!' })
        setaddNewMailConfirmation(false)
        setaddmailModal(false)
        setFormInput({})
      })
      .catch((err) => {
        console.log(formInput)
        console.log(err.request)
        if (err.request.onload == null) {
          setnotifMessage({ title: 'Server is ...!', message: 'Not sure whats going on.. :( , this is such a bruh moment!' })
        } else {
          setnotifMessage({ title: 'duplikat!', message: 'data nomor/resi telah ada!' })
        }
        setaddNewMailConfirmation(false)
        setaddmailModal(false)
      })
  }


  // Edit Mail
  const showEditModal = (surat) => {
    // setFormInput(surat)
    formInput.nomor = surat.nomor
    formInput.tujuan = surat.tujuan
    formInput.hal = surat.hal
    formInput.resi = surat.resi
    formInput.tanggal = surat.tanggal
    formInput.kurir = surat.kurir
    formInput.id = surat.id
    console.log(formInput)
    setEditMailModal(true)
  }

  const editSubmit = () => {
    axios.patch(`http://localhost:3002/api/mails/${formInput.id}`, formInput)
      .then(res => console.log(res))
      .catch(err => console.log(err))



    // reactive update
    const editedMail = data.map((mail) => {
      // if it has same id
      if (mail.id == formInput.id) {
        return {
          ...mail,
          nomor: formInput.nomor,
          tujuan: formInput.tujuan,
          hal: formInput.hal,
          tanggal: formInput.tanggal,
          resi: formInput.resi,
          kurir: formInput.kurir,
        }
      }
      return mail
    })
    setData(editedMail)



    //Close Modals and empty form input
    setEditMailModal(false)
    setnewMailModal(false)
    setFormInput({})
  }


  // Delete a mail

  function deleteMail() {
    axios.delete(`http://localhost:3002/api/mails/${formInput.id}`)
      .then(res => {

        console.log(res)
        setnotifMessage({ title: res.data.message, message: res.data.messagebody })
        setData(data.filter((mail) => mail.id != formInput.id))
        setonDeleteModal(false)
        setEditMailModal(false)
        setFormInput({})
      })
      .catch(res => {
        console.log(res)
        setnotifMessage({ title: res.data.message, message: res.data.messagebody })
        setonDeleteModal(false)
        setEditMailModal(false)
        setFormInput({})
      })
  }


  //  download XLSX
  function downloadExcel() {
    axios({
      method: 'get',
      url: `http://localhost:3002/api/mails/excel`,
      responseType: 'blob',
      headers: {
        'Content-Disposition': "attachment;filename=report.xls",
        'Content-Type': "application/octet-stream"
      }
    })
      .then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'MailData.xlsx');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link)
      })
      .catch((error) => {
        alert(error);
      })
  }



  // SHOW SEARCH



  return (
    <div>
      <GlobalStyle />
      <Navbar cancelLogin={() => { setLoginModal(false) }} activateLogin={() => console.log('asdasd')} loginStatus={loginModal} loginClick={() => setLoginModal(true)} />

      <Main data={data}
        addMailModal={() => {
          setaddmailModal(true)
        }}
        showEditModal={showEditModal}
        showSearch={() => { setshowSearchBar(!showSearchBar); console.log(showSearchBar) }}
        searchGO={null}
        downloadExcel={downloadExcel}
        refreshScrape={() => console.log('whatever dude')}
        showSearchBar={showSearchBar}
        onSearchChange={(e) => { setsearchState(e.target.value); console.log(searchState) }}
      />

      {addmailModal ?
        <ModalNewMail
          closeNewMail={() => { setaddmailModal(false) }}

          nomor={formInput.nomor} nomorChange={event => setFormInput({ ...formInput, nomor: event.target.value })}
          tujuan={formInput.tujuan} tujuanChange={e => setFormInput({ ...formInput, tujuan: e.target.value })}
          resi={formInput.resi} resiChange={e => setFormInput({ ...formInput, resi: e.target.value })}
          hal={formInput.hal} halChange={e => setFormInput({ ...formInput, hal: e.target.value })}
          tanggal={formInput.tanggal} tanggalChange={e => setFormInput({ ...formInput, tanggal: e.target.value })}
          kurirInput={(e) => setFormInput({ ...formInput, kurir: e.target.value })}
          submitNewMail={(e) => { e.preventDefault(); setaddNewMailConfirmation(true) }}
        />
        : null}

      {/* Add Mail Confirmation */}
      {addNewMailConfirmation ? <ModalAddMailConfirmation messageText={'add new mail?'} confirmNo={() => setaddNewMailConfirmation(false)} confirmYes={confirmInput} /> : null}

      {EditMailModal ? <ModalEditMail
        onDelete={() => setonDeleteModal(true)}
        closeNewMail={() => { setFormInput([]); setEditMailModal(false) }}
        nomor={formInput.nomor} nomorChange={event => setFormInput({ ...formInput, nomor: event.target.value })}
        tujuan={formInput.tujuan} tujuanChange={e => setFormInput({ ...formInput, tujuan: e.target.value })}
        resi={formInput.resi} resiChange={e => setFormInput({ ...formInput, resi: e.target.value })}
        hal={formInput.hal} halChange={e => setFormInput({ ...formInput, hal: e.target.value })}
        tanggal={formInput.tanggal} tanggalChange={e => setFormInput({ ...formInput, tanggal: e.target.value })}
        kurirInput={(e) => setFormInput({ ...formInput, kurir: e.target.value })}
        setFormInput={() => setnewMailModal(true)}
      /> : null}

      {/* Modal Delete Confirmation */}
      {deleteModal ? <ModalAddMailConfirmation messageText={'Delete mail?'} confirmNo={() => setonDeleteModal(false)} confirmYes={deleteMail} /> : null}

      {/* Edit Mail Confirmation */}
      {newMailModal ? <ModalAddMailConfirmation messageText={'Update mail?'} confirmNo={() => setnewMailModal(false)} confirmYes={editSubmit} /> : null}

      {/* Notify each action */}
      {notification ? <Notification title={notifMessage.title} message={notifMessage.message} /> : null}
      {/* spinner */}
      {/* {loading ? <Spinner /> : null} */}
    </div>


  )
}
