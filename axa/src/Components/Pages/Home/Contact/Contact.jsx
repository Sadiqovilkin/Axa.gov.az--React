import React from 'react'

const Contact = () => {
  return (
<section id='contact'>
  <div className="container-fluid py-5">
    <div className="row">
      <div className="col-lg-5 g-5 px-5">
        <div className="form">
          <h4>Bizimlə Əlaqə</h4>
          <form action="">
            <label htmlFor="fullname">Ad,Soyad</label>
            <input type="text"  name='fullname' />
            <label htmlFor="tel">Telefon</label>
            <input type="tel"  name='tel' />
            <label htmlFor="email">E-poçt ünvanı</label>
            <input type="email"  name='email' />
            <label htmlFor="msg">Mesaj</label>
            <input type="text"  name='msg' />
            <div className="robot_check">
              <input type="checkbox" />
              <span>Ben Robot Degilim</span>
              <div className="bg">
              <div className="icon"></div>
              </div>
            </div>
            <button type="submit" class="mt-1">Göndər</button>
          </form>
        </div>
      </div>
      <div className="col-lg-7 g-5">
        <div className="maps">
        <iframe  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=284&amp;hl=en&amp;q=Bak%C4%B1%20%C5%9F%C9%99h%C9%99ri,%20N%C9%99c%C9%99f%20N%C9%99rimanov%20k%C3%BC%C3%A7%C9%99si,%207A%20Baku+(Bak%C4%B1%20%C5%9F%C9%99h%C9%99ri,%20N%C9%99c%C9%99f%20N%C9%99rimanov%20k%C3%BC%C3%A7%C9%99si,%207A)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
          <ul>
            <li>Bakı şəhəri, Nəcəf Nərimanov küçəsi, 7A</li>
            <li>AZ 1106</li>
            <li>E-mail: info@axa.gov.az </li>
            <li className='weight_li'>Fumiqasiya (zərərsizləşdirmə) xidmətləri üçün:</li>
            <li>Tel: 012-562-85-34(daxili:152), 050-644-74-15, 070-965-62-14</li>
            <li>E-mail: fumiqasiya@axa.gov.az</li>
            <li className='weight_li'>Laboratoriya (torpaq və toxum analizləri) xidmətləri üçün:</li>
            <li>Tel: 012-562-85-67, 077-299-70-50, 070-288-78-01</li>
          </ul>
        </div>
     

      </div>
    </div>
  </div>
</section>
    )
}

export default Contact