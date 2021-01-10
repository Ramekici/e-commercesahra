import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { productDetail, getProductDetail} from '../../../../features/products/productSlice';
import Spinner from '../../UI/spinner/Spinner';

import FigureCarousel from './detailItems/FigureCarousel';
//import Deneme from '../Deneme';

import ColorForm from './detailItems/ColorForm';
import TitleBrandPrice from './detailItems/TitleBrandPrice';
import DetailInfo from '../info/DetailInfo';
import RelatedProducts from '../relatedItems/RelatedProducts';
import ReviewsModal from '../../modals/ReviewsModal';
import WriteModals from '../../modals/WriteModals';

export default function Detail() {
    let { id } = useParams();
    const dispatch = useDispatch();
    const detailP = useSelector(productDetail);
    useEffect(() => {
        dispatch(getProductDetail(id));
    }, [dispatch, id])
    
    const goster = detailP ? (
        <>
        <section className="hero" style={{backgroundColor: "#efefef"}}>
            <div className="container">
                <div className="row gutter-2 gutter-md-2 justify-content-between">
                    <div className="col-lg-7">
                        <FigureCarousel 
                            image1={detailP.imagePath1}
                            image2={detailP.imagePath2}
                            image3={detailP.imagePath3} 
                        />  
                    </div>
                    <div className="col-lg-5 mb-3 mb-lg-0">
                        <div className="row">
                            <div className="col-12">
                                <TitleBrandPrice  
                                isim= {detailP.isim}
                                marka= {detailP.marka}
                                fiyat ={detailP.fiyat}
                                indirim = {detailP.indirim} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <p> { detailP.aciklama }</p>
                            </div>
                        </div>
                        <ColorForm  
                            renkler={detailP.renk}
                            id={detailP._id}
                            detailP={detailP}
                        />
                    </div>
                </div>
                </div>
        </section>
        <DetailInfo pId={id} sektor={detailP.sektor.toUpperCase()} yorumlar={detailP.yorumlar}/>
        <RelatedProducts />
        <ReviewsModal yorumlar={detailP.yorumlar}/>
        <WriteModals id={id}/>
    </> ) : <Spinner/>;
    return goster;

    
}
