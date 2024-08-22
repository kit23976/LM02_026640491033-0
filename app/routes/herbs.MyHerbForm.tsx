import { useState } from "react";
import AppMenu from "./Template/menu";
// นายกฤษณล เนียมสุด 026640491033-0

export default function CreateCard() {
  const [name, setName] = useState("");
  const [sap, setsap] = useState("");
  const [detal, setdetal] = useState("");
  const [ame, setame] = useState("");

  const [imageUrl, setImageUrl] = useState("");
  const [herbs, setherbs] = useState<{ id: number; name: string; sap: string; detal: string; ame: string; imageUrl: string }[]>([]);
  const [nextId, setNextId] = useState(0);
  const [selectedCard, setSelectedCard] = useState<{ id: number; name: string; sap: string; detal: string; ame: string; imageUrl: string } | null>(null);

  const handleClickAdd = () => {
    if (!name || !sap) {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
      return;
    }
    setherbs([
      ...herbs,
      {
        id: nextId,
        name: name,
        sap: sap,
        detal: detal,
        imageUrl: imageUrl,
        ame: ame ,
      },
    ]);
    setNextId(nextId + 1);
    setName("");
    setsap("");
    setdetal("");
    setImageUrl("");
  };

  const handleViewDetails = (card: { id: number; name: string; sap: string; detal: string;ame: string; imageUrl: string }) => {
    setSelectedCard(card);
  };

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedCard(null);
    }
  };

  return (
    
    <div className="bg-gray-900 min-h-screen p-6 text-gray-200">
              <main>
      { <AppMenu />}
      </main>
      {selectedCard && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-gray-900 bg-opacity-80 backdrop-blur-md"
          onClick={handleOutsideClick}
        >
          <div className="bg-gray-800 w-full max-w-3xl p-6 border border-gray-700 rounded-lg shadow-2xl overflow-auto relative">
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-4 right-4 text-gray-300 hover:text-gray-100 transition duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <h2 className="text-3xl font-semibold mb-6">รายละเอียดสมุทไพร</h2>
            <div className="flex items-center mb-6">
              {selectedCard.imageUrl && (
                <img
                  src={selectedCard.imageUrl}
                  alt={`Image for ${selectedCard.name}`}
                  className="w-24 h-24 object-cover rounded-full shadow-lg border-4 border-gray-700"
                />
              )}
              <div className="ml-4">
                <p className="text-xl font-bold text-gray-100">{selectedCard.name}</p>
                <p className="text-sm text-gray-400">{selectedCard.sap}</p>
                <p className="text-sm text-gray-400">{selectedCard.detal}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400"><strong>ID:</strong> {selectedCard.id}</p>
              </div>
            </div>
            <button
              onClick={() => setSelectedCard(null)}
              className="w-full inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-100 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-6"
            >
              ปิด
            </button>
          </div>
        </div>
      )}
      <h1 className="text-4xl font-bold mb-6">เพิ่มข้อมูลยาสมุทไพร</h1>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg backdrop-blur-md">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300">ชื่อยาสมุทไพร</label>
          <input
            name="cName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="ชื่อยาสมุทไพร"
          />
        </div>
        


        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300">สรรพคุณ</label>
          <input
            name="cPhone"
            value={sap}
            onChange={(e) => setsap(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="สรรพคุณ"
            type="tel"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300">รายละเอียด</label>
          <textarea
            name="cAddress"
            value={detal}
            onChange={(e) => setdetal(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="รายละเอียด"
            rows={4}
          />
        </div>


การนำไปใช้&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   
        <input type="radio" id="html" name="fav_language"            onChange={(e) => setame(e.target.value)}
 value="ยาที่ใช้ภายใน"/>
        <label className="html">ยาที่ใช้ภายใน     </label>&nbsp;&nbsp;
        <input type="radio" id="html" name="fav_language"onChange={(e) => setame(e.target.value)} value="ยาที่ใช้ภายนอก"/>
        <label className="html">ยาที่ใช้ภายนอก     </label>&nbsp;&nbsp;
        <input type="radio" id="html" name="fav_language"onChange={(e) => setame(e.target.value)} value="ยาที่ใช้ทั้งภายนอกและภายใน"/>
        <label className="ยาที่ใช้ทั้งภายนอกและภายใน">ยาที่ใช้ทั้งภายนอกและภายใน   </label>

        <h2><p> ประเภทสมุทไพร <select name="grade" id="grade1">
            
             <option value="1"> หัว </option>
             <option value="2">  หาง  </option>
             <option value="ลำตัน"> ลำตัน </option>

         </select>
</p>
</h2>
       

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300">URL รูปภาพ</label>
          <input
            name="cImageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="กรอกรูปภาพ URL"
          />
        </div>
        <button
          onClick={handleClickAdd}
          className="w-full inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-100 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          [บันทึก]
        </button>
      </div>
      <div className="mt-8">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">ลำดับที่</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">ชื่อยาสมุทไพร              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">สรรพคุณ              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">รายละเอียด              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">การนำไปใช้</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">รูปภาพ</th>
            </tr>
          </thead>
          <tbody className="bg-gray-900 divide-y divide-gray-700">
            {herbs.map((herb) => (
              <tr key={herb.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">{herb.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{herb.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{herb.sap}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{herb.detal}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{herb.ame}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {herb.imageUrl && (
                    <img src={herb.imageUrl} alt={`Image for ${herb.name}`} className="w-16 h-16 object-cover rounded-md" />
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <button
                    onClick={() => handleViewDetails(herb)}
                    className="text-blue-400 hover:text-blue-500"
                  >
                    ดูรายละเอียด
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}