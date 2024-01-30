"use client"
import Image from "next/image";
import axios from 'axios';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation'

export default function Home() {
  const [loading, setLoading] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState('');
  const router = useRouter();

  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleTicket = () => {
    setLoading(true);
    const phoneNumberValue = inputRef.current.value;

    // Send the phone number to the server using Axios
    axios.get(`/api/tickets/get/${phoneNumberValue}`)
      .then(response => {
        router.push(`https://inptserver.onrender.com/download/${response?.data?.id}`)
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to purchase ticket:', error);
        setLoading(false);
      });
  };

  const checkPhone = (event) => {
    event.preventDefault();
    handleTicket('');
  };

  return (
    <>
      <div className="flex items-center justify-center h-[100vh] w-[100vw] bg-slate-900 flex-col">
        <div className="w-[100vw] flex justify-center -ml-1">
          <Image
            src={`https://ik.imagekit.io/pxjkpi3mt/9lrilSO0DF91IrnpURTcs-transformed.png`}
            alt="inptlogo"
            width={250}
            height={250}
            priority
          />
        </div>
        <h2 className="text-xl font-bold text-white">
          Inserta tu Número de Teléfono
        </h2>
        <br />
        <div className="mb-4 form-control">
          <label className="label">
            <span className="label-text">Teléfono (+34)</span>
          </label>
          <input
            type="tel"
            placeholder="Teléfono (Sin +34)"
            ref={inputRef}
            onChange={handleInputChange}
            className={phoneNumber === "No Phone" ? 'input input-bordered input-error' : 'input input-bordered'}
          />
          <br />
          <button className="btn btn-success" onClick={handleTicket}><div className={loading === true ? 'loading loading-spinner text-white' : 'hidden'}></div><span className={loading === true ? 'hidden' : 'block text-white text-lg'}>Confirmar</span></button>
          <pre className="pt-5 text-[10px] text-center">
            Al hacer clic en &apos;Confirmar&apos;,
            <br />
            acepta nuestros Términos y condiciones
            <br />y Política de
            <br />privacidad.
          </pre>
        </div>
      </div>
    </>
  );
}