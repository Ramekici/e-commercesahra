import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    urunler: null,
    isLoading: false,
    detailProduct: null,
    pageNumber: 1,
    markalar: null,
    filterItems:[],
    filterMarka:[],
    filterRenk:[],
    errors: null
  },
  reducers: {
    setProductStart: (state) => {
      state.isLoading = true;
    },
    setProductSuccess: (state, action) => {
      state.urunler = action.payload;
      state.isLoading = false;
    },
    setProductFailed: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload; 
    },
    setProductDetail: (state, action ) => {
      state.detailProduct = action.payload
    },
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    setMarka: (state, action) => {
      state.markalar = action.payload;
    },
    setFilterMarka: (state, action) => {
      state.filterMarka.push(action.payload);
    },
    deleteFilterMarka: (state, action) => {
      const ind = state.filterMarka.findIndex(ind => ind === action.payload);
      state.filterMarka.splice(ind, 1);
    },
    setFilterRenk: (state, action) => {
      state.filterRenk.push(action.payload);
    },
    deleteFilterRenk: (state, action) => {
      const ind = state.filterRenk.findIndex(ind => ind === action.payload);
      state.filterRenk.splice(ind, 1);
    },
    setPriceItems: (state, action) => {
      state.filterItems= action.payload;
    },
  },
});

export const { addProduct, setProductSuccess, 
              setProductStart, setProductFailed, setProductDetail, setFilterMarka, deleteFilterMarka,
              setPageNumber, setMarka, setFilterRenk, deleteFilterRenk,
              setPriceItems } = productSlice.actions;

export const getProducts = (pg, srt) => dispatch => { 
  const query = `?ps=${12}&pg=${pg}`;
  const sorting = `&sort=${srt}`;
  dispatch (setProductStart());
  axios.get('http://localhost:5000/api/products/' + query + sorting)
      .then(res => {
        dispatch(setProductSuccess(res.data));  
      })
      .catch(err => {
          dispatch(setProductFailed());
      })
};


export const getProductsFilter = (pg, srt, data) => dispatch => { 
  const query = `?ps=${12}&pg=${pg}`;
  const sorting = `&sort=${srt}`;
  dispatch (setProductStart());
  axios.get('http://localhost:5000/api/products/filter/' + query + sorting)
      .then(res => {
        dispatch(setProductSuccess(res.data));  
      })
      .catch(err => {
          dispatch(setProductFailed());
      })
};

export const getProductMarka = () => dispatch => { 
  let markalar = [];
  axios.get('http://localhost:5000/api/products/marka')
      .then(res => {
        res.data.map(item => { 
          if (markalar.includes(item.marka)) {
            return null;
          }
          return markalar.push(item.marka)
        })
          dispatch(setMarka(markalar));
      })
      .catch(err => {
          dispatch(setProductFailed());
      })
};

export const getProductKategori = (pg, kategori, srt, data) => dispatch => { 
  const query = `?ps=${12}&pg=${pg}`;
  const sorting = `&sort=${srt}`;
  let filterItems= "";
  if(data) {
    filterItems = `&marka=${data.marka}&renk=${data.renk}&fiyat=${data.low}-${data.high}` 
  }
  axios.get(`http://localhost:5000/api/products/kategoriler/${kategori}` + query + sorting + filterItems )
      .then(res => {
        dispatch(setProductSuccess(res.data)); 
      })
      .catch(err => {
          dispatch(setProductFailed());
      })
};

export const getProductDetail = (id) => dispatch => { 
  dispatch (setProductStart());
  axios.get('http://localhost:5000/api/products/' + id)
      .then(res => {
        dispatch(setProductDetail(res.data));    
      })
      .catch(err => {
          dispatch(setProductFailed());
      })
};

export const addYorum = (id, data) => dispatch => {
  const token = localStorage.getItem('token');
  axios.post(`http://localhost:5000/api/products/yorum/${id}`, data, {headers: {'Authorization' : 'Bearer ' + token}})
      .then(res => {
        dispatch(getProductDetail(id));
      })
      .catch(err => {
          dispatch(setProductFailed());
      })
};


export const addProducts = (data) => dispatch => {
  const productData = new FormData();
  const { sektor, marka, isim, fiyat, miktar, indirim, seciliRenkler, aciklama, image1, image2, image3 } = data;
  productData.append('sektor', sektor); productData.append('isim', isim); productData.append('marka', marka);
  productData.append('fiyat', fiyat); productData.append('miktar', miktar);
  productData.append('indirim', indirim); productData.append('aciklama', aciklama);
  productData.append('renkler', seciliRenkler); 
  productData.append('image', image1, isim); 
  productData.append('image', image2, isim); 
  productData.append('image', image3, isim);
  const token = localStorage.getItem('token');
  axios.post('http://localhost:5000/api/admin', productData , {headers: {'Authorization' : 'Bearer ' + token}})
    .then(res => {
      dispatch(getProducts(1, "artan"));
    })
    .catch(err => {
      dispatch(setProductFailed(err.response.data));
    })
  ;
};

export const updateProducts = (id, data) => dispatch => {
  
  const { sektor, marka, isim, fiyat, miktar, indirim, seciliRenkler, 
    aciklama, image1, image2, image3 } = data;
  let updateProduct;
  if (typeof(image1||image2||image3) === 'object') {
    updateProduct = new FormData();
    updateProduct.append('id', id)
    updateProduct.append('sektor', sektor); updateProduct.append('isim', isim); 
    updateProduct.append('marka', marka);
    updateProduct.append('fiyat', fiyat); updateProduct.append('miktar', miktar);
    updateProduct.append('indirim', indirim); updateProduct.append('aciklama', aciklama);
    updateProduct.append('renkler', seciliRenkler);
    typeof(image1) === 'string' ? updateProduct.append('imagePath1', image1, isim): updateProduct.append('image', image1, isim); 
    typeof(image2) === 'string' ? updateProduct.append('imagePath2', image2, isim): updateProduct.append('image', image2, isim);
    typeof(image3) === 'string' ? updateProduct.append('imagePath3', image3, isim): updateProduct.append('image', image3, isim);
  } else { 
    updateProduct = { id, sektor, isim, marka, fiyat, miktar, aciklama,
    indirim, seciliRenkler, imagePath1: image1, imagePath2: image2, imagePath3: image3 };
  }
  const token = localStorage.getItem('token');
  axios.put(`http://localhost:5000/api/admin/${id}`, updateProduct , 
    {headers: {'Authorization' : 'Bearer ' + token}})
    .then(res => {
      dispatch(getProducts(1, "artan"));
    })
    .catch(err => {
      dispatch(setProductFailed(err.response.data));
    })
  ;
};

export const deleteProducts = (id) => dispatch => {
  const token = localStorage.getItem('token');
  axios.delete(`http://localhost:5000/api/admin/${id}`, 
  {headers: {'Authorization' : 'Bearer ' + token}})
    .then(res => {
       dispatch(getProducts(1, "artan"));
    })
    .catch(err => {
       dispatch(setProductFailed(err.response.data));
    })
  ;
};

export const productStatus = state => state.products;
export const productDetail = state => state.products.detailProduct;
export const filterPrice = state => state.products.filterItems;
export const filterRenk = state => state.products.filterRenk;
export const filterMarka = state => state.products.filterMarka;
export const productError = state => state.products.errors;

export default productSlice.reducer;