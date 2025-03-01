function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 text-gray-800">
      <header className="bg-gradient-to-r from-red-700 to-red-500 text-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold">SANIPID NEW ERA SRL</h1>
        <section className="mt-4 border-t border-white pt-4">
          <h2 className="text-2xl font-semibold">PLANIFICARE</h2>
          <p className="text-sm mt-2">
            Monitorizare, alimentare, eliminarea rezidurilor raticide, ridicare
            si ingroparea rozatoarelor
          </p>
        </section>
        <p className="mt-4 text-sm font-semibold">Incheiat azi: 20.06.23</p>
      </header>

      <main className="mt-6">
        <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-300 bg-white p-4">
          <table className="table w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-400 text-gray-900 border border-gray-400">
                <th className="border border-gray-400 p-2">Nr. crt</th>
                <th className="border border-gray-400 p-2">
                  Data amplasarii statiilor
                </th>
                <th className="border border-gray-400 p-2">
                  Data completarii statiilor
                </th>
                <th className="border border-gray-400 p-2">Data control</th>
                <th className="border border-gray-400 p-2">
                  Data ridicarii rezidurilor si inlocuire momeli
                </th>
                <th className="border border-gray-400 p-2">
                  Data ridicarii ingroparii rozatoarelor
                </th>
                <th className="border border-gray-400 px-8 py-2">Obs</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(14)].map((_, index) => (
                <tr
                  key={index}
                  className="bg-gray-100 hover:bg-gray-200 border border-gray-400"
                >
                  <th className="border border-gray-400 p-2">{index + 1}</th>
                  <td className="border border-gray-400 p-2"></td>
                  <td className="border border-gray-400 p-2"></td>
                  <td className="border border-gray-400 p-2"></td>
                  <td className="border border-gray-400 p-2"></td>
                  <td className="border border-gray-400 p-2"></td>
                  <td className="border border-gray-400 p-2"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="flex justify-between items-center h-72 p-32 text-center">
          <div className="flex flex-col gap-8">
            <div>Prestator</div>
            <div>SANIPID NEW ERA SRL</div>
          </div>
          <div className="flex flex-col gap-8">
            <div>Beneficiar</div>
            <div className="">
              ...................................................................................
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-6 bg-gray-800 text-white p-6 rounded-lg shadow-md">
        <ul className="space-y-3">
          <li className="flex flex-col">
            <p className="font-semibold">Adresa:</p>
            <p className="text-sm">
              str. Constantin Brancoveanu, nr. 54, ap. 27, mun. Cluj-Napoca,
              Jud. Cluj
            </p>
          </li>
          <li className="flex flex-col">
            <p className="font-semibold">Telefon:</p>
            <p className="text-sm">0749823632</p>
          </li>
          <li className="flex flex-col">
            <p className="font-semibold">Email:</p>
            <p className="text-sm">claudiu.ciurba@yahoo.com</p>
          </li>
          <li className="flex flex-col">
            <p className="font-semibold">CIF:</p>
            <p className="text-sm">33403425 Reg.com.112/2214/2014</p>
          </li>
          <li className="flex flex-col">
            <p className="font-semibold">BAN (RON):</p>
            <p className="text-sm">RO94BTRLRONCRT0262032601</p>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
