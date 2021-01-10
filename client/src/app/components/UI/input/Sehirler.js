import React from 'react'

export default function Sehirler({title, id, col, value, onChangeHandler, err, name}) {
    return (
        <div className={"form-group "+ col}>
            <label htmlFor= {id}> {title} </label>
            <select name={name} onChange = {onChangeHandler} value={value} className="form-control" >
                <option value="">İl Seçiniz</option>
                <option value="Adana">Adana</option>
                <option value="Adıyaman">Adıyaman</option>
                <option value="Afyonkarahisar">Afyonkarahisar</option>
                <option value="Ağrı">Ağrı</option>
                <option value="Amasya">Amasya</option>
                <option value="Ankara">Ankara</option>
                <option value="Antalya">Antalya</option>
                <option value="Artvin">Artvin</option>
                <option value="Aydın">Aydın</option>
                <option value="Balıkesir">Balıkesir</option>
                <option value="Bilecik">Bilecik</option>
                <option value="Bingöl">Bingöl</option>
                <option value="Bitlis">Bitlis</option>
                <option value="Bolu">Bolu</option>
                <option value="Burdur">Burdur</option>
                <option value="Bursa">Bursa</option>
                <option value="Çanakkale">Çanakkale</option>
                <option value="Çankırı">Çankırı</option>
                <option value="Çorum">Çorum</option>
                <option value="Denizli">Denizli</option>
                <option value="Diyarbakır">Diyarbakır</option>
                <option value="Edirne">Edirne</option>
                <option value="Elazığ">Elazığ</option>
                <option value="Erzincan">Erzincan</option>
                <option value="Erzurum">Erzurum</option>
                <option value="Eskişehir">Eskişehir</option>
                <option value="Gaziantep">Gaziantep</option>
                <option value="Giresun">Giresun</option>
                <option value="Gümüşhane">Gümüşhane</option>
                <option value="Hakkâri">Hakkâri</option>
                <option value="Hatay">Hatay</option>
                <option value="Isparta">Isparta</option>
                <option value="Mersin">Mersin</option>
                <option value="İstanbul">İstanbul</option>
                <option value="35">İzmir</option>
                <option value="36">Kars</option>
                <option value="37">Kastamonu</option>
                <option value="38">Kayseri</option>
                <option value="39">Kırklareli</option>
                <option value="40">Kırşehir</option>
                <option value="41">Kocaeli</option>
                <option value="42">Konya</option>
                <option value="43">Kütahya</option>
                <option value="44">Malatya</option>
                <option value="45">Manisa</option>
                <option value="46">Kahramanmaraş</option>
                <option value="47">Mardin</option>
                <option value="48">Muğla</option>
                <option value="49">Muş</option>
                <option value="50">Nevşehir</option>
                <option value="51">Niğde</option>
                <option value="52">Ordu</option>
                <option value="53">Rize</option>
                <option value="54">Sakarya</option>
                <option value="55">Samsun</option>
                <option value="56">Siirt</option>
                <option value="57">Sinop</option>
                <option value="58">Sivas</option>
                <option value="59">Tekirdağ</option>
                <option value="60">Tokat</option>
                <option value="61">Trabzon</option>
                <option value="62">Tunceli</option>
                <option value="63">Şanlıurfa</option>
                <option value="64">Uşak</option>
                <option value="65">Van</option>
                <option value="66">Yozgat</option>
                <option value="67">Zonguldak</option>
                <option value="68">Aksaray</option>
                <option value="69">Bayburt</option>
                <option value="70">Karaman</option>
                <option value="71">Kırıkkale</option>
                <option value="72">Batman</option>
                <option value="73">Şırnak</option>
                <option value="74">Bartın</option>
                <option value="75">Ardahan</option>
                <option value="76">Iğdır</option>
                <option value="77">Yalova</option>
                <option value="78">Karabük</option>
                <option value="79">Kilis</option>
                <option value="80">Osmaniye</option>
                <option value="81">Düzce</option>
            </select>
            { err ? <div className="invalid-feedback" style={{display:"block"}}> 
                 {err} </div> : null}
        </div>
    )
}
