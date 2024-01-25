import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center h-[100vh] w-[100vw] bg-slate-900 flex-col">
          <div className="w-[100vw] flex justify-center -ml-1">
            <Image
              src={`https://ik.imagekit.io/pxjkpi3mt/9lrilSO0DF91IrnpURTcs-transformed.png`}
              alt="inptlogo"
              width={250}
              height={250}
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
              placeholder="Phone Number"
              className="input input-bordered"
            />
            <br />
            <button className="btn btn-success">Confirmar</button>
            <pre className="pt-5 text-[10px] text-center">
              Al hacer clic en &#34;Confirmar&#34;, <br />
              acepta nuestros Términos y condiciones <br />y Política de
              privacidad.
            </pre>
          </div>
      </div>
    </>
  );
}
