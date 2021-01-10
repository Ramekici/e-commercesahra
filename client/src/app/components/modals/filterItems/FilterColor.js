import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterRenk, deleteFilterRenk, filterRenk } from '../../../../features/products/productSlice';

export default function FilterColor() {
    const dispatch = useDispatch();
    const renklerim = useSelector(filterRenk);

    const renkler = [
      {id: 23542, renk:'red', classim: renklerim.find(item => item === 'red') ? 'btn text-red active' :'btn text-red'},
      {id: 23532, renk:'black', classim: renklerim.find(item => item === 'black') ? 'btn text-black active' :'btn text-black'},
      {id: 23522, renk:'white', classim: renklerim.find(item => item === 'white') ? 'btn text-white active' :'btn text-white'},
      {id: 23512, renk:'brown', classim: renklerim.find(item => item === 'brown') ? 'btn text-brown active' :'btn text-brown'},
      {id: 23511, renk:'gray', classim: renklerim.find(item => item === 'gray') ? 'btn text-gray active' :'btn text-gray'},
    ];

    const handleInputChange = (event) => {
      if(event.target.checked) {
        dispatch(setFilterRenk(event.target.value));
      } else if (!event.target.checked) {
        dispatch(deleteFilterRenk(event.target.value));
      }
    }

    return (
        <div className="widget">
              <span className="widget-collapse d-lg-none" data-toggle="collapse" 
                data-target="#collapse-4" aria-expanded="false" 
                aria-controls="collapse-4" role="button">
                  Renk Filtreleme
              </span>
              <div className="d-lg-block collapse" id="collapse-4">
                <span className="widget-title"> Renk </span>
                <div className="widget-content">
                  <div className="btn-group-toggle btn-group-square btn-group-colors" >
                      {renkler.map(item => {
                        return (
                          <label className={item.classim} key={item.id} htmlFor={item.id} style={{backgroundColor:"#f9f9f9"}}>
                            <input type="checkbox" check="false"
                            value={item.renk} id={item.id} 
                            onChange={handleInputChange}/>
                          </label>
                        )
                      })}
                  </div>
                </div>
              </div>
            </div>
    )
}
