import React, { useState } from "react";
import styles from "./contact.module.css";
import Button from "../button/button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/Fa";
import { HiMail } from "react-icons/hi";

function ContactFrom() {
    const [name, setName] = useState("Aadil");
  const [email, setEmail] = useState("rkaadil06.com");
  const [text, setText] = useState("love coding");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA CALL " icon={<FaPhoneAlt fontSize="24px" />} />
          <Button
            text="VIA SUPPORT CHAT "
            icon={<MdMessage fontSize="24px" />}
          />
        </div>
        <Button
          text="VIA EMAIL FROM "
          is_Outline={true}
          icon={<HiMail fontSize="24px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name"  value={name}
              onChange={(e) => setName(e.target.value)/>
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email" >Email</label>
            <input type="text" name="email"   value={email}
              onChange={(e) => setEmail(e.target.value) />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" value={text}
              onChange={(e) => setText(e.target.value)} />
          </div>
          <div style={{display:"flex",justifyContent:"end" , }}>

          <Button text="SUBMIT BUTTON "/>
          <br />
          <div style={{display:"flexbox"}}>{name+" "+   
          email +" " + text 
  }</div>
            
          </div>
        </form>
      </div>
      <div className="contact_image">
        <img src="pana.svg" alt="" />
      </div>
    </section>
  );
}

export default ContactFrom;
