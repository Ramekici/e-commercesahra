import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Layout from "./items/Layout";
import ResimEkle from './items/ResimEkle';
import {addProducts, updateProducts,  productDetail, productError } from '../../../../features/products/productSlice';
import { useParams, useRouteMatch, useHistory} from 'react-router-dom';
import { setGosterilen } from '../../../../features/profiles/profilesSlice';


const AddProduct = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const product = useSelector(productDetail);
    const productErr = useSelector(productError);
    let { id } = useParams();
    let match = useRouteMatch("/admin/edit/:id");

    const [imagePath1, setImagePath1]= useState("");
    const [imagePath2, setImagePath2]= useState("");
    const [imagePath3, setImagePath3]= useState("");

    const [values, setValues] = useState({
        sektor: "", isim: "", marka: "", fiyat:0, miktar: 0, aciklama: "",
        indirim: 0, seciliRenkler:[], image1: "", image2: "", image3: "",
        loading: false, error: "", createdProduct: "", redirectToProfile: false,
    });
    const { sektor, isim, marka, fiyat, miktar, aciklama, indirim, seciliRenkler,
        image1, image2, image3, loading, error, createdProduct} = values;

    const [errors, setErrors] = useState({sktr:'', ism:'', mrk :'', fyt:'', mktr:'', aciklm:'', imagePth:''});
    const {sktr, ism, mrk , fyt, mktr, aciklm, imagePth} = errors;
    
    useEffect(()=> {
      if(match) {
        if(product){
          const valueNew = {
            sektor:product.sektor, isim: product.isim,marka: product.marka, fiyat: product.fiyat,
            miktar: product.miktar, aciklama:product.aciklama,indirim: product.indirim, 
            seciliRenkler:product.renk, image1: product.imagePath1, image2: product.imagePath2, image3: product.imagePath3}
          setImagePath1(product.imagePath1);
          setImagePath2(product.imagePath2);
          setImagePath3(product.imagePath3);
          setValues({...valueNew});
        }     
      }   
    },[product])

    useEffect(() => {
      setErrors({...errors, ...productErr});
    }, [productErr])
    
    const handleChange = name => event => {
      let file;
      if(name === "image1" || name === "image2" || name === "image3" ) {
        file = event.target.files[0];
        setValues({ ...values, [name]: file });
        const reader = new FileReader();
        reader.onload = () => {
          if(name === "image1") {
            setImagePath1(reader.result)
          }else if(name === "image2") {
            setImagePath2(reader.result)
          } else {
            setImagePath3(reader.result)}
        };
        reader.readAsDataURL(file);
      } else {
        file = event.target.value;
        setValues({ ...values, [name]: file });
      } 
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: "", loading: true });
        if(match) {
          dispatch(updateProducts(id, {...values}));
          history.push('/admin');
          dispatch(setGosterilen(1))
        } else {
          dispatch(addProducts({...values}));
        }
        setValues({
            ...values, isim: "", sektor: "", marka:"", aciklama: "",image1: "",image2: "",image3: "",
            fiyat:0, miktar:0, indirim:0, createdProduct: "Urun Oluştu",loading: false})
        };

    const inputElemans = [
        {id:"1234b", name: "isim", value:isim, type: "text", col: "col-12 col-md-6", error:ism },
        {id:"1234c", name: "marka", value:marka, type: "text",  col: "col-12 col-md-6", error:mrk },
        {id:"1234d", name: "fiyat", value:fiyat, type: "number",  col: "col-12 col-md-4", error: fyt},
        {id:"1234g", name: "indirim", value:indirim, type: "number",  col: "col-12 col-md-4" },
        {id:"1234e", name: "miktar", value:miktar, type: "number",  col: "col-12 col-md-4", error: mktr }
    ];

    const images = [
        {id:"1234k", name: "image1", value:image1, img:imagePath1,col: "col-md-4" },
        {id:"1234l", name: "image2", value:image2, img:imagePath2,col: "col-md-4" },
        {id:"1234m", name: "image3", value:image3, img:imagePath3,col: "col-md-4" },
    ];
    const categories = [
        {id:"1234kl", name: "Çanta", value:"canta", col: "col-md-4" },
        {id:"1234lk", name: "Cüzdan", value:"cuzdan", col: "col-md-4" },
        {id:"1234mk", name: "Ayakkabı", value:"ayakkabi", col: "col-md-4"},
        {id:"1234mf", name: "Bebek", value:"bebek", col: "col-md-4" },
    ];
    const renkler = ["red", "blue", "gray", "black", "yellow", "orange", "brown"];
    const [rengim, setrengim] = useState([])
    const handleInputChange = (event) => {
      if(event.target.checked) {
        setrengim([...rengim, event.target.value]);
        setValues({...values, seciliRenkler:[...rengim, event.target.value]});
      } else if (!event.target.checked) {
        const renklerim = rengim;
        const ind = renklerim.findIndex(i => i === event.target.value);
        renklerim.splice(ind, 1);
        setrengim([...renklerim]);
        setValues({...values, seciliRenkler:[...renklerim]});
      }
    }
    
  const showError = () => (
        <div
          className="alert alert-danger"
          style={{ display: error ? "" : "none" }}
        >
          {error}
        </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{ display: createdProduct ? "" : "none" }}
    >
      <h2>{`${createdProduct}`}</h2>
    </div>
  );

  const showLoading = () =>
    loading && (
      <div className="alert alert-success">
        <h2>Yükleniyor...</h2>
      </div>
    );

  return (
    <Layout
      title="Yeni Ürün Ekleme/Güncelleme"
    >
      <div className="row">
        <div className="col-12">
          {showLoading()}
          {showSuccess()}
          {showError()}
          <form className="mb-3" onSubmit={clickSubmit}>
            <h4>Fotoğraf Yükleme</h4>
            <div className="row" >
            {images.map(img => {
            return (
                <ResimEkle name={img.name} image={img.img} key = {img.id} error= {imagePth}
                onChangeHandler={handleChange(`${img.name}`)} 
                />)
            })}
            </div>
            <div className="row">
              {inputElemans.map(el => {
                  return(
                        <div className={"form-group "+ el.col} key={el.id}>
                          <label className="text-muted">{el.name}</label>
                          <input
                          onChange={handleChange(`${el.name}`)}
                          type={el.type}
                          className="form-control"
                          value={el.value}
                          />
                          { el.error ? <div className="invalid-feedback" style={{display:"block"}}> 
                          {el.error} </div> : null}
                        </div>)
                })}
              </div>
                <div className="form-group">
                    <label> Renk Seçenekleri </label>
                    <div className="btn-group-toggle btn-group-square btn-group-colors">
                    {renkler.map((el, i) => {
                      let elAc = '';
                      if (seciliRenkler.includes(el)){
                        elAc = 'active'}
                          return (
                              <label className = {`btn text-${el} ${elAc}`} htmlFor={i+123423} key={i+123423}>
                                  <input type="checkbox" id={i+123423} check="false"
                                  value={el} onChange= {handleInputChange}/>
                              </label>
                          )
                        })}
                    </div>
                </div>
              <div className="form-group">
                  <label className="text-muted">Sektor</label>
                  <select onChange={handleChange("sektor")} className="form-control" value={sektor}>
                      <option>Sektor Seçiniz</option>
                      {categories.map((c, i) => (
                          <option key={i} value={c.value}>
                              {c.name}
                          </option>
                      ))}
                  </select>
                  { sktr ? <div className="invalid-feedback" style={{display:"block"}}> 
                          {sktr} </div> : null}
              </div>
              <div className="form-group">
                  <label className="text-muted">Açıklama</label>
                  <textarea
                  onChange={handleChange("aciklama")}
                  className="form-control"
                  value={aciklama}
                  />
                  { aciklm ? <div className="invalid-feedback" style={{display:"block"}}> 
                          {aciklm} </div> : null}
              </div>
              <button type="submit" className="btn btn-outline-primary"> 
                {match ? "Ürünü Güncelle": "Ürünü Yükle"}
              </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default AddProduct;