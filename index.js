
const participante = {
  nome: "Leonardo Gomes",
  email: "leonardo003gomes@gmail.com",
  dataInscricao: new Date(2024, 2, 22, 19, 00),
  dataCheckIn: new Date(2024, 2, 22, 19, 30)
}

let participantes = [
  {
    nome: "Ana Beatriz",
    email: "bea@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 17, 22),
    dataCheckIn: new Date(2024, 2, 24, 22, 00)
  },
{
    nome: "Ullysses Gomes",
    email: "ullygomes@gmail.com",
    dataInscricao: new Date(2024, 2, 20, 14, 20),
    dataCheckIn: new Date(2024, 2, 23, 19, 02)
  },
{
    nome: "Larissa Ribeiro",
    email: "larissaribei8@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 18, 23),
    dataCheckIn: new Date(2024, 2, 23, 20, 01)
  },
{
    nome: "Jennifer Luana",
    email: "jenni1@gmail.com",
    dataInscricao: new Date(2024, 2, 19, 12, 20),
    dataCheckIn:null
  },
{
    nome: "Luiz Manoel",
    email: "lmanoel401@gmail.com",
    dataInscricao: new Date(2024, 2, 18, 17, 24),
    dataCheckIn: new Date(2024, 2, 26, 18, 04)
  },
{
    nome: "Nicole Santos",
    email: "nibernardo@gmail.com",
    dataInscricao: new Date(2024, 2, 17, 15, 24),
    dataCheckIn: new Date(2024, 2, 24, 16, 05)
  },
{
    nome: "Raissa Pereira",
    email: "raylove@gmail.com",
    dataInscricao: new Date(2024, 2, 15, 14, 30),
    dataCheckIn: null
  },
{
    nome: "Marcelo Lima",
    email: "marcelo@gmail.com",
    dataInscricao: new Date(2024, 2, 29, 19, 36),
    dataCheckIn: new Date(2024, 2, 30, 14, 38)
  },
{
    nome: "Flávia Antônia",
    email: "flaviatonia@gmail.com",
    dataInscricao: new Date(2024, 2, 18, 15, 15),
    dataCheckIn: null
  },
{
    nome: "Iracema Ferreira",
    email: "cema@gmail.com",
    dataInscricao: new Date(2024, 2, 16, 15, 42),
    dataCheckIn: null
  },
]

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs (Date.now())
  .to(participante.dataInscricao)

  let dataCheckIn = dayjs(Date.now())
  .to(participante.dataCheckIn)

  if(participante.dataCheckIn == null) {
    dataCheckIn = `
    <button
    data-email="${participante.email}"
    onclick="fazerCheckIn(event)"
    >
     Confirmar Check-in
     </button>
    `
  }

    return ` 
  <tr>
    <td>
      <strong>
        ${participante.nome}
      </strong>
      <br>
      <small>
      ${participante.email}
      </small>
    </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckIn}</td>
  </tr>
  `
}


const atualizarListas = (participantes) => {
let output = ""

for(let participante of participantes)
output = output + criarNovoParticipante(participante)

document.
querySelector('tbody') 
.innerHTML = output
}

atualizarListas(participantes)

const adicionarPartipante = (event) => {
 event.preventDefault()

 const dadosDoFomulario =new FormData(event.target)

const participante = {
  nome: dadosDoFomulario.get('nome'),
  email: dadosDoFomulario.get('email'),
  dataInscricao: new Date(),
  dataCheckIn: null
}

const participantExiste = participantes.find(
  (p) => {
    return p.email == participante.email
  }
)

if(participantExiste) {
alert('Email ja cadastrado!')
return
}


participantes = [participante,...participantes]
atualizarListas(participantes)

event.target.querySelector('[name="nome"]').value= ""
event.target.querySelector('[name="email"]').value= ""

} 

const fazerCheckIn = (Event) => {
  const mensagemConfirmacao = ' Tem certeza que deseja fazer o check-in?'

  if ( confirm(mensagemConfirmacao) = false) {
    return
  }



  const participante = participantes.find((p) => {
    return p.email == event.target.dataset.email
  }) 
   participante.dataCheckIn = new Date()

   atualizarListas(participantes)


}