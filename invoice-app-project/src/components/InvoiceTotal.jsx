export const InvoiceTotal = ({total}) => {

  return (
    <>
      <div className="row justify-content-end px-2">
        <div className="col-8 text-end"><h4>Subtotal</h4></div>
        <div className="col-2 text-end"><h4 className="fw-normal">$<span>{(total).toFixed(2)}</span></h4></div>
      </div>
      <div className="row justify-content-end px-2">
        <div className="col-8 text-end"><h4>IVA &#40;19%&#41;</h4></div>
        <div className="col-2 text-end"><h4 className="fw-normal">$<span>{(total * 0.19).toFixed(2)}</span></h4></div>
      </div>
      <div className="row justify-content-end px-2">
        <div className="col-8 text-end"><h4>TOTAL</h4></div>
        <div className="col-2 text-end"><h4 className="fw-normal">$<span>{(total * 0.19 + total).toFixed(2)}</span></h4></div>
      </div>
    </>
  );
}
