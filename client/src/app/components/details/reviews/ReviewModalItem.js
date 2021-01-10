import React from 'react'

export default function ReviewModalItem({metin, date, name, baslik, puan}) {
    let yil;
    if (puan === 0) {
        yil = <>
        <span className="far fa-star"></span>
        <span className="far fa-star"></span>
        <span className="far fa-star"></span>
        <span className="far fa-star"></span>
        <span className="far fa-star"></span>
        </>
    } else if (puan === 1) {
        yil = <>
        <span className="fas fa-star"></span>
        <span className="far fa-star"></span>
        <span className="far fa-star"></span>
        <span className="far fa-star"></span>
        <span className="far fa-star"></span>
        </>
    }else if (puan === 2) {
        yil = <>
        <span className="fas fa-star"></span>
        <span className="fas fa-star"></span>
        <span className="far fa-star"></span>
        <span className="far fa-star"></span>
        <span className="far fa-star"></span>
        </>
    }
    else if (puan === 3) {
        yil = <>
        <span className="fas fa-star"></span>
        <span className="fas fa-star"></span>
        <span className="fas fa-star"></span>
        <span className="far fa-star"></span>
        <span className="far fa-star"></span>
        </>
    }else if (puan === 4) {
        yil = <>
        <span className="fas fa-star"></span>
        <span className="fas fa-star"></span>
        <span className="fas fa-star"></span>
        <span className="fas fa-star"></span>
        <span className="far fa-star"></span>
        </>
    } else {
        yil = <>
        <span className="fas fa-star"></span>
        <span className="fas fa-star"></span>
        <span className="fas fa-star"></span>
        <span className="fas fa-star"></span>
        <span className="fas fa-star"></span>
        </>
    }

    return (
        <div className="col-12">
                <blockquote className="testimonial">
                  <div className="testimonial-rate">
                    {yil}
                  </div>
                    <h5> {baslik} </h5>
                    <p>{metin}</p>
                  <footer> {name}, {date} </footer>
                </blockquote>
              </div>
                      
              

    )
}
