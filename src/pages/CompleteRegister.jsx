import { useState } from "react";

const CompleteRegister = () => {
  const [phone, setPhone] = useState("");
  console.log(phone)
  return (
    
    <>
      <div className="mb-3">
                    <div className="input-group has-validation">
                      <span className="input-group-text" id="inputGroupPrepend">
                        +58
                      </span>
                      <input
                        placeholder="Teléfono"
                        type="tel"
                        className="form-control"
                        id="phone"
                        aria-label="Teléfono"
                        onChange={(e) => setPhone(e.target.value)}
                        pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                        required
                      />
                    </div>
                  </div>
    </>
  );
};
export default CompleteRegister;
