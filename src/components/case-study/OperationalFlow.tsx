import s from "./OperationalFlow.module.css";

const stages = [
  ["Order placed", "Customer order enters the system"],
  ["Processing", "Order moves into operations"],
  ["Inventory", "Product availability and stock"],
  ["Warehouse", "Products held and handled"],
  ["Shipping", "Shipment progresses through its journey"],
  ["Delivery", "Order reaches the customer"],
];

export function OperationalFlow() {
  return <figure className={s.figure} aria-label="Conceptual order lifecycle with exception workflows">
    <p className={s.title}>From order to delivery</p>
    <ol className={s.stages}>
      {stages.map(([title, detail], index) => <li className={s.stage} key={title}>
        <span className={s.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
        <div className={s.stageContent}><span className={s.stageTitle}>{title}</span><span className={s.detail}>{detail}</span></div>
      </li>)}
    </ol>
    <div className={s.exceptions}>
      <p className={s.branchLabel}>Exceptions to follow up</p>
      <ul className={s.paths}><li>Failed delivery</li><li>Returns</li><li>Claims</li></ul>
      <div className={s.recovery}><span>Warehouse inventory</span><span aria-hidden="true">&rarr;</span><span>Potential resale</span></div>
    </div>
    <figcaption>A simplified view of the operation. Individual orders can take different paths.</figcaption>
  </figure>;
}
