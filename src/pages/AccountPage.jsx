import React from 'react'
import { User, Clipboard, Mail, Warehouse, Building2 } from "lucide-react"

const AccountPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="p-8 w-full max-w-6xl">
        
        {/* HEADER */}
        <div className="flex justify-between items-center border-b border-gray-300 pb-4">
          <h3 className="font-bold text-lg">Conta Kairo</h3>
          <button className="bg-[#EF7F27] px-8 py-2 rounded-full text-white font-medium hover:opacity-90 transition cursor-pointer">
            Deslogar
          </button>
        </div>

        {/* CONTEÚDO */}
        <div className="mt-10 flex flex-col sm:flex-row gap-20">

          {/* COLUNA ESQUERDA */}
          <div className="flex flex-col gap-2 w-64">
            <img
              src="mulher_profissional.jpg"
              alt="Foto de perfil"
              className="w-32 h-32 rounded-full shadow object-cover"
            />

            <span className="font-bold text-xl">Renata Silveira</span>

            <span className="text-gray-400 text-sm truncate">
              renatasilv@outlook.com
            </span>

            <span className='text-gray-400 text-sm'>
              Clique <span className='text-[#EF7F27] font-bold hover:opacity-60 transition cursor-pointer'>aqui</span> para Atualizar seus dados Cadastrais.
            </span>
          </div>

          {/* COLUNA DIREITA */}
          <div className="flex-1 min-w-0">

            {/* TÍTULO DA SEÇÃO */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Informações pessoais</h1>
              <p className="text-gray-400 text-sm">Visualize seus dados cadastrais</p>
            </div>

            {/* GRID DE CARDS */}
            <div className="grid grid-cols-2 gap-5">

              <div className="bg-gray-100 rounded-2xl shadow p-6 w-full">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="font-semibold text-gray-900">Nome</span>
                    <span className="text-gray-400 text-sm break-all">Renata Silveira</span>
                  </div>
                  <User size={18} color="#EF7F27" className="shrink-0" />
                </div>
              </div>

              <div className="bg-gray-100 rounded-2xl shadow p-6 w-full">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="font-semibold text-gray-900">Email</span>
                    <span className="text-gray-400 text-sm break-all">
                      renatasilv@outlook.com
                    </span>
                  </div>
                  <Mail size={18} color="#EF7F27" className="shrink-0" />
                </div>
              </div>

              <div className="bg-gray-100 rounded-2xl shadow p-6 w-full">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="font-semibold text-gray-900">Empresa</span>
                    <span className="text-gray-400 text-sm break-all">Kairo</span>
                  </div>
                  <Building2 size={18} color="#EF7F27" className="shrink-0" />
                </div>
              </div>

              <div className="bg-gray-100 rounded-2xl shadow p-6 w-full">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="font-semibold text-gray-900">Setor</span>
                    <span className="text-gray-400 text-sm break-all">Recursos Humanos</span>
                  </div>
                  <Warehouse size={18} color="#EF7F27" className="shrink-0" />
                </div>
              </div>

              <div className="bg-gray-100 rounded-2xl shadow p-6 w-full">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="font-semibold text-gray-900">Cargo</span>
                    <span className="text-gray-400 text-sm break-all">
                      Profissional em Recursos Humanos Sênior
                    </span>
                  </div>
                  <Clipboard size={18} color="#EF7F27" className="shrink-0" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountPage


