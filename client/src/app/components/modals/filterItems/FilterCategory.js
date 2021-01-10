import React from 'react';
import { Link } from 'react-router-dom';

export default function FilterCategory() {

    const filterDatas = [
        {id:113, name: "yeniler"},
        {id:213, name: "canta"},
        {id:313, name: "cuzdan"},
        {id:413, name: "valiz"},
        {id:513, name: "ayakkabı"},
        {id:613, name: "indirim"},
    ]
    return (
          <div className="widget">
              <span className="widget-collapse d-lg-none" data-toggle="collapse" 
                data-target="#collapse-1" aria-expanded="false" 
                aria-controls="collapse-1" role="button">
                Kategori Filtreleme
              </span>
              <div className="d-lg-block collapse" id="collapse-1">
                <span className="widget-title">Kategoriler</span>
                <div className="widget-content">
                  <ul id="page-nav" className="nav flex-column nav-category">
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="collapse" 
                         role="button" href="#menu-2"
                        aria-expanded="false" aria-controls="menu-2">Bayan</a>
                      <div className="collapse" id="menu-2" data-parent="#page-nav">
                          <ul className="nav flex-column">
                              {filterDatas.map(data=> {
                                  return (
                                    <li className="nav-item" key={data.id}>
                                        <Link className="nav-link text-capitalize"
                                        to={"/shop/bayan/" + data.name}> {data.name}  </Link>
                                    </li>  
                                  )
                              })}
                          </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="collapse" href="#menu-3" role="button" 
                      aria-expanded="false" aria-controls="menu-3">Bay</a>
                      <div className="collapse" id="menu-3" data-parent="#page-nav">
                        <div>
                          <ul className="nav flex-column">
                            {filterDatas.map(data=> {
                                  return (
                                    <li className="nav-item" key={data.id + 10}>
                                        <Link className="nav-link text-capitalize" to={"/shop/bay/" + data.name}> {data.name} </Link>
                                    </li>  
                                  )
                              })}
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
    )
}
