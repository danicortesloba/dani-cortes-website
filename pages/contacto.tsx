import React, {useRef, useState}  from 'react';
import Layout from '../components/layout';
import formStyle from './contacto.module.css'

export default function Home() {
    const [success, setSuccess] = useState(false)
    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "97b58469-a112-43e8-a620-f6e35f612fe1");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            setSuccess(true)
        }
    }
  return (
    <Layout>
          <h2>¡Hablemos!</h2>
          {success ? <p>¡Tu mensaje fue enviado! Pronto te contestaré.</p> :
         <form className={formStyle.container} onSubmit={handleSubmit}>
    
      <div className={formStyle.block}>
        <label htmlFor="frm-email" className={formStyle.name}>Email</label>
        <input
          id="frm-email"
          type="email"
          name="email"
          autoComplete="email"
          required
        />
      </div>
      <div className={formStyle.block}>
        <label htmlFor="frm-phone" className={formStyle.name}>Teléfono</label>
        <input
          id="frm-phone"
          type="text"
          name="phone"
          autoComplete="tel"
          required
        />
      </div>
      <div className={formStyle.block}>
        <div className={formStyle.block}>
          <label htmlFor="frm-first" className={formStyle.name}>Nombre</label>
          <input
            id="frm-first"
            type="text"
            name="first"
            autoComplete="given-name"
            required
          />
        </div>
        <div className={formStyle.block}>
          <label htmlFor="frm-last" className={formStyle.name}>Apellido</label>
          <input
            id="frm-last"
            type="text"
            name="last"
            autoComplete="family-name"
            required
          />
        </div>
      </div>
      <div className={formStyle.block}>
        <label htmlFor="frm-message" className={formStyle.name}>Mensaje</label>
        <textarea id="frm-message" name="message" required className={formStyle.message}></textarea>
      </div>
      <div className={ formStyle.button}>
        <button type="submit">Enviar</button>
      </div>
    </form>
}

    </Layout>
   
  );
}
