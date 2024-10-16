import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-200 py-10 mt-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-10">
          <div>
            <h4 className="font-bold mb-4">Xaridorlar uchun</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600">
                  Qo'llab-quvvatlash
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  Chegirmalar kalendari
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  AliExpress bo'yicha qo'llanma
                </a>
              </li>
            </ul>
          </div>

          {/* Hamkorlar uchun */}
          <div>
            <h4 className="font-bold mb-4">Hamkorlar uchun</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600">
                  AliExpress'da soting
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  Affiliate dasturi
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  Sotuvchi blogi
                </a>
              </li>
            </ul>
          </div>

          {/* Kompaniya haqida */}
          <div>
            <h4 className="font-bold mb-4">Kompaniya haqida</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600">
                  Matbuot markazi
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  AliTech
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  Kompaniya hayoti haqida blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Ijtimoiy tarmoqlar */}
        <div className="mt-10">
          <h4 className="font-bold mb-4">Biz ijtimoiy tarmoqlarda</h4>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-gray-600">
                Telegram
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                Odnoklassniki
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                Vkontakte
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                Dzen
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright va siyosat */}
        <div className="mt-10 border-t pt-4">
          <p className="text-gray-600">© AliExpress 2019 – 2024</p>
          <ul className="flex space-x-6 mt-4">
            <li>
              <a href="#" className="text-gray-600">
                Maxfiylik siyosati
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                Foydalanuvchi shartnomasi
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
