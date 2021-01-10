import React from 'react';

import KrediKartBox from './KrediKartBox';
import PaymentItemTab from './PaymentItemTab';
import Havale from './Havale';

export default function PaymentItem({krediKartData}) {

    return (
        <div className="row gutter-1 mb-6">
          <PaymentItemTab/>
          <div className="col-12">
            <div className="tab-content" id="myTabContent">
              <KrediKartBox krediKartData= {krediKartData}/>
              <Havale/>
            </div>
          </div>
          <div className="col-12">
            <div className="custom-control custom-switch mb-2">
              <input type="checkbox" className="custom-control-input" id="customSwitch1"/>
              <label className="custom-control-label text-muted" htmlFor="customSwitch1"> Fatura Adresi Kargo Adresi ile Aynı</label>
            </div>
          </div>
        </div>
    )
}
