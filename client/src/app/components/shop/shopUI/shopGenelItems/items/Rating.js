import React from 'react'

export default function Rating({puan}) {
    let yil;
    const puanF = Math.floor(puan);
    if (puanF === 0) {
        yil = <>
        <span className="sr-star far fa-star"></span>
        <span className="sr-star far fa-star"></span>
        <span className="sr-star far fa-star"></span>
        <span className="sr-star far fa-star"></span>
        <span className="sr-star far fa-star"></span>
        </>
    } else if (puanF === 1) {
        yil = <>
        <span className="sr-star fas fa-star active"></span>
        <span className="sr-star far fa-star"></span>
        <span className="sr-star far fa-star"></span>
        <span className="sr-star far fa-star"></span>
        <span className="sr-star far fa-star"></span>
        </>
    }else if (puanF === 2) {
        yil = <>
        <span className="sr-star fas fa-star active"></span>
        <span className="sr-star fas fa-star active"></span>
        <span className="sr-star far fa-star"></span>
        <span className="sr-star far fa-star"></span>
        <span className="sr-star far fa-star"></span>
        </>
    }
    else if (puanF === 3) {
        yil = <>
        <span className="sr-star fas fa-star active"></span>
        <span className="sr-star fas fa-star active"></span>
        <span className="sr-star fas fa-star active"></span>
        <span className="sr-star far fa-star"></span>
        <span className="sr-star far fa-star"></span>
        </>
    }else if (puanF === 4) {
        yil = <>
        <span className="sr-star fas fa-star active"></span>
        <span className="sr-star fas fa-star active"></span>
        <span className="sr-star fas fa-star active"></span>
        <span className="sr-star fas fa-star active"></span>
        <span className="sr-star far fa-star"></span>
        </>
    } else {
        yil = <>
        <span className="sr-star fas fa-star active"></span>
        <span className="sr-star fas fa-star active"></span>
        <span className="sr-star fas fa-star active"></span>
        <span className="sr-star fas fa-star active"></span>
        <span className="sr-star fas fa-star active"></span>
        </>
    }
    return yil;
}
