import React, { useState } from 'react';

const App: React.FC = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleConfirmation = () => {
    if (isConfirmed || loading) return;

    setLoading(true);

    // Meta Pixel tracking removed

    // Simular um pequeno delay para feedback visual antes de mostrar a confirmação
    setTimeout(() => {
      setIsConfirmed(true);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center border border-gray-100">
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold text-green-700 tracking-tight uppercase mb-2">
            ALHO E SÓ
          </h1>
          <div className="h-1 w-20 bg-green-500 mx-auto rounded-full"></div>
        </header>

        {!isConfirmed ? (
          <div className="space-y-6">
            <div className="text-lg font-medium text-gray-700">
              eBook – Aprenda a Vender Alho e Gerar Renda Extra
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              Obrigado por sua compra via WhatsApp! Para validar seu acesso e registrar sua entrada em nosso sistema, clique no botão abaixo.
            </p>

            <button
              onClick={handleConfirmation}
              disabled={loading}
              className={`w-full py-4 px-6 rounded-xl text-white font-bold text-lg transition-all transform active:scale-95 shadow-lg
                ${loading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-green-600 hover:bg-green-700 hover:shadow-green-200 cursor-pointer'
                }`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  PROCESSANDO...
                </span>
              ) : (
                'CONFIRMAR MINHA COMPRA'
              )}
            </button>
            
            <p className="text-xs text-gray-400 mt-4">
              Ao confirmar, você receberá as instruções de acesso em breve.
            </p>
          </div>
        ) : (
          <div className="animate-in fade-in zoom-in duration-500">
            <div className="mb-6 flex justify-center">
              <div className="bg-green-100 p-4 rounded-full">
                <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Compra confirmada com sucesso!
            </h2>
            <p className="text-gray-600 mb-6">
              Bem-vindo(a) à <span className="font-bold text-green-700">ALHO E SÓ</span>. Seu acesso está sendo processado.
            </p>
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <p className="text-green-800 text-sm font-medium">
                Verifique seu WhatsApp para o link de download do seu eBook.
              </p>
            </div>
          </div>
        )}
      </div>

      <footer className="mt-8 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} ALHO E SÓ - Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default App;