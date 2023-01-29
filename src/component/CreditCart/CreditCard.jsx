import { useRef } from "react";
import s from "./style.module.css";

export function CreditCard() {
  const cardCodeInputRef = useRef();
  const cardExpirationInputRef = useRef();

  const onCardNumberChangeInput = (event) => {
    if (event.target.value.length === 16) {
      cardCodeInputRef.current.focus();
    }
  };

  return (
    <div className={s.container}>
      Credit Card
      <div>
        <label>Code Carte Bancaire</label>
        <input
          onChange={onCardNumberChangeInput}
          type="number"
          name="creditCardNumber"
        />
      </div>
      <div>
        <label>Code Secret </label>
        <input
          ref={(reference) => {
            cardCodeInputRef.current = reference;
          }}
          type="number"
          name="creditCardCode"
        />
      </div>
      <div>
        <label>Expiration</label>
        <input
          ref={cardExpirationInputRef}
          type="text"
          name="creditCardExpiratio "
        />
      </div>
    </div>
  );
}
