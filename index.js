let emailReceiver = 'aan21nasuhi"gmail.com';

function submitForm() {
  let name = document.getElementById('input-name').value;
  let email = document.getElementById('input-email').value;
  let phone = document.getElementById('input-phone').value;
  let subject = document.getElementById('choose-subject').value;
  let message = document.getElementById('input-message').value;

  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(subject);
  console.log(message);


    if (name == '') {
      alert('Tolong isi Nama Kamu...');
    }
    if (email == '') {
      alert('Tolong isi Email Kamu...');
    }
    if (phone == '') {
      alert('Tolong isi Nomor Handphone Kamu...');
    }

  if (name == '' || email == '' || phone == '') {
    alert('Tolong isi semua form...');
  }


  let a = document.createElement('a');
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hallo nama saya ${name} ${message} silahkan hubungi ${phone} Email: ${email}`
  a.click()
  
  let dataObject = {
    name: name,
    email: email,
    phoneNumber: phone,
    subject: subject,
    message: message,
  };

  console.log(dataObject);
}
