import React from 'react';
import { Coffee } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

function QRLanding() {
  const menuUrl = `${window.location.origin}/menu`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex flex-col">
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Coffee className="w-8 h-8 text-orange-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">Pandey Masala</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Welcome to Pandey Masala</h2>
          <p className="text-gray-600 mb-8">
            Scan the QR code below to view our delicious menu on your device
          </p>
          <div className="bg-white p-4 rounded-xl shadow-lg inline-block mb-6">
            <QRCodeSVG
              value={menuUrl}
              size={250}
              level="H"
              includeMargin={true}
              className="qr-code"
            />
          </div>
          <p className="text-sm text-gray-500">
            Point your camera at the QR code to access our menu
          </p>
        </div>
      </main>

      <footer className="bg-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center text-gray-500 text-sm">
            © 2024 Pandey Masala. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default QRLanding;