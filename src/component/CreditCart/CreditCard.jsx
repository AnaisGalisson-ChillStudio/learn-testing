import s from "./style.module.css";

export function CreditCard() {
  return (
    <div className={s.container}>
      Credit Card
      <div>
        <label>Code Carte Bancaire</label>
        <input type="number" name="creditCardNumber" />
      </div>
      <div>
        <label>Code Secret </label>
        <input type="number" name="creditCardCode" />
      </div>
      <div>
        <label>Expiration</label>
        <input type="text" name="creditCardExpiratio " />
      </div>
    </div>
  );
}
