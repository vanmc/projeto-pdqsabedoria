let messagesYes = [
    "Quem planta amizade, colhe confiança.",
    "A paciência é a chave que abre as portas da sabedoria.",
    "Mais vale uma palavra de sabedoria do que mil palavras vazias.",
    "Na vida, o melhor remédio é a compreensão e o bom coração.",
    "A verdadeira riqueza está na simplicidade e na generosidade.",
    "Quem ouve mais do que fala, aprende mais do que ensina.",
    "O tempo é o maior mestre, mas infelizmente mata todos os seus alunos.",
    "Quem busca a verdade deve primeiro aprender a ouvir.",
    "A humildade é a base sobre a qual se constrói uma vida de sucesso.",
    "Os maiores tesouros são encontrados no coração dos amigos sinceros.",
    "A serenidade é o caminho para a verdadeira paz interior.",
    "Toda grande jornada começa com um pequeno passo de coragem.",
    "A sabedoria não vem com a idade, mas com a experiência e reflexão.",
    "Quem cultiva a paciência, encontra a paz mesmo nas tempestades.",
    "A gratidão transforma o que temos em suficiente.",
    "O verdadeiro valor de uma pessoa está em suas ações, não em suas palavras.",
    "O conhecimento é um campo vasto, mas a sabedoria é uma luz que ilumina o caminho.",
    "A honestidade é o alicerce de qualquer relação duradoura e respeitável.",
    "A vida é um espelho que reflete o que você demonstra ao mundo.",
    "Não há maior riqueza do que viver com integridade e propósito.",
    "A coragem é a habilidade de enfrentar o desconhecido com um coração tranquilo.",
    "O amor é a força que supera qualquer obstáculo e cura qualquer ferida.",
    "A sabedoria é aprender a encontrar alegria nas pequenas coisas da vida.",
    "Não é o tamanho dos nossos bens que define nossa felicidade, mas sim a qualidade dos nossos relacionamentos.",
    "Quem se importa com o presente e aprende com o passado, constrói um futuro promissor.",
    "A compreensão é o primeiro passo para construir pontes e derrubar barreiras.",
    "A força verdadeira não está na ausência de medo, mas na capacidade de enfrentá-lo.",
    "Quem se adapta às mudanças é capaz de prosperar em qualquer circunstância.",
    "A vida é uma coleção de momentos; valorize cada um deles com sabedoria.",
    "O respeito mútuo é a base de qualquer sociedade harmoniosa.",
    "Quem busca sempre aprender, nunca para de crescer.",
    "A paz interior vem de aceitar as coisas que não podemos mudar.",
    "Toda adversidade é uma oportunidade disfarçada para crescimento pessoal.",
    "A alegria compartilhada é uma alegria multiplicada.",
    "O verdadeiro sucesso é medido pela felicidade e satisfação que conseguimos transmitir aos outros.",
    "A perseverança é o segredo para transformar sonhos em realidade.",
    "Cada erro é uma lição valiosa, se estivermos dispostos a aprender com ele.",
    "A confiança é um presente que deve ser conquistado e preservado com cuidado.",
    "Quem vive com gratidão e amor nunca está verdadeiramente sozinho.",
    "A sabedoria é saber quando agir e quando esperar.",
    "Os verdadeiros amigos são aqueles que permanecem ao seu lado em todas as fases da vida.",
    "A felicidade não é um destino, mas uma jornada que escolhemos viver.",
    "Quem se dedica ao bem-estar dos outros enriquece a própria vida.",
    "A simplicidade é a chave para uma vida plena e significativa.",
    "A comunicação clara e aberta é o fundamento de qualquer relação saudável.",
    "O sucesso verdadeiro é aquele que vem acompanhado de uma sensação de realização e propósito.",
    "O aprendizado contínuo é a fonte de inovação e progresso.",
    "O tempo investido em entender o outro nunca é perdido.",
    "O verdadeiro valor está na forma como tratamos as pessoas ao nosso redor.",
    "Cada dia é uma nova oportunidade para ser melhor do que ontem.",
    "A empatia é a ponte que conecta corações e mentes.",
    "A prática da humildade nos torna verdadeiramente grandes.",
    "Não se mede a grandeza de uma pessoa pelas posses, mas pelo impacto positivo que ela tem sobre o mundo.",
    "O equilíbrio entre mente, corpo e espírito é essencial para uma vida saudável e feliz.",
    "A vida é uma série de escolhas; escolha sempre com sabedoria e compaixão.",
    "Quem cultiva a alegria interna, enfrenta os desafios com serenidade.",
    "O verdadeiro tesouro é aquele que acumulamos em nossa jornada de vida, e não o que guardamos materialmente.",
    "Cada experiência, boa ou ruim, é uma peça fundamental no quebra-cabeça da nossa vida.",
    "A sinceridade é o caminho mais curto para construir relações de confiança.",
    "O respeito pelos outros é o reflexo do respeito por si mesmo.",
    "A mente aberta é a chave para o crescimento e a descoberta contínua.",
    "Quem semeia bondade, colhe respeito e admiração.",
    "A verdadeira sabedoria está em saber quando ser firme e quando ser flexível.",
    "A felicidade é encontrada nas pequenas alegrias diárias e na apreciação dos momentos simples.",
    "Quem vive com propósito e paixão não se perde no caminho da vida.",
    "A dignidade é a maneira como nos mantemos firmes em nossos princípios, independentemente das circunstâncias.",
    "O verdadeiro sucesso é encontrar um equilíbrio entre realizações pessoais e contribuições para o bem comum.",
    "A vida é feita de momentos que passamos com aqueles que amamos e que nos amam.",
    "O perdão é a chave para libertar a alma e restaurar a paz interior.",
    "A resiliência é a capacidade de se levantar após cada queda e continuar com esperança.",
    "Cada ato de bondade, por menor que seja, faz uma diferença significativa na vida dos outros.",
    "A reflexão profunda sobre nossas ações e decisões é essencial para o crescimento pessoal.",
    "A autenticidade é o caminho para construir uma vida verdadeira e plena.",
    "Os desafios são oportunidades disfarçadas que nos ensinam a sermos mais fortes e mais sábios.",
    "A verdade é uma luz que ilumina o caminho para a justiça e a compreensão.",
    "A bondade é um presente que se multiplica quando é compartilhado.",
    "O amor e a compaixão são os maiores presentes que podemos oferecer ao mundo.",
    "A verdadeira força é aquela que vem da capacidade de enfrentar as adversidades com coragem e esperança.",
    "O caminho para a sabedoria é pavimentado com experiências e aprendizado contínuo.",
    "A verdadeira liberdade é viver de acordo com nossos princípios e valores mais profundos.",
    "Cada dia é uma nova chance de fazer o bem e impactar positivamente a vida dos outros.",
    "A serenidade é alcançada quando aprendemos a aceitar o que não podemos mudar e a mudar o que podemos.",
    "A confiança em si mesmo é construída com autoaceitação e honestidade.",
    "A alegria verdadeira vem de viver com autenticidade e integridade.",
    "A vida é uma dança entre os momentos de silêncio e os momentos de ação.",
    "Cada desafio é uma oportunidade para descobrir nossa verdadeira força e capacidade.",
    "A sabedoria está em reconhecer que nunca sabemos tudo e que há sempre mais a aprender.",
    "O sucesso é uma jornada, não um destino; é o reflexo do esforço contínuo e do compromisso com nossos objetivos.",
    "A verdadeira felicidade é encontrada na aceitação e apreciação do presente.",
    "O entendimento mútuo é a base para uma convivência harmoniosa e respeitosa.",
    "Cada experiência é uma lição que nos ensina mais sobre nós mesmos e sobre a vida.",
    "A vida é um equilíbrio entre dar e receber, entre ação e reflexão.",
    "A verdadeira sabedoria é a capacidade de agir com justiça, mesmo quando é difícil.",
    "A empatia nos permite conectar profundamente com os outros e construir relacionamentos significativos.",
    "Cada escolha que fazemos molda o caminho que trilhamos e o futuro que construímos.",
    "O verdadeiro valor da vida está em como usamos nosso tempo e energia para fazer o bem.",
    "A humildade é a base para aprender com os outros e crescer continuamente.",
    "O respeito é a base de qualquer relacionamento duradouro e significativo.",
    "A gratidão transforma desafios em oportunidades e dificuldades em aprendizados.",
    "A vida é um reflexo do amor e da dedicação que investimos em nossos relacionamentos e objetivos.",
    "O verdadeiro sucesso é encontrar propósito e alegria nas pequenas coisas do dia a dia.",
    "Cada pessoa que encontramos tem algo a nos ensinar; a sabedoria está em estar aberto a essas lições.",
    "A serenidade vem de aceitar o passado, viver o presente e confiar no futuro.",
    "A verdadeira força está em enfrentar as adversidades com coragem e esperança.",
    "A felicidade é uma escolha que fazemos diariamente, independentemente das circunstâncias externas.",
    "Cada momento é uma oportunidade para crescer, aprender e fazer a diferença.",
    "O verdadeiro tesouro da vida está nas experiências que vivemos e nas pessoas que amamos.",
    "A sabedoria é saber viver de acordo com nossos valores e princípios, independentemente das pressões externas.",
    "A verdadeira paz interior é encontrada ao aceitar e amar a nós mesmos como somos.",
    "O caminho para a realização pessoal é pavimentado com esforço, dedicação e integridade.",
    "A felicidade é cultivada ao focar no que temos, em vez de no que nos falta.",
    "Cada dia é uma nova chance de fazer o bem, de aprender e de crescer como pessoa.",
    "O verdadeiro valor da vida está nas conexões que fazemos e no impacto positivo que causamos.",
]

const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const messageBox = document.querySelector('.messageBox')
const btnYes = document.querySelector('.btnYes')
const btnNo = document.querySelector('.btnNo')
const btnRestart = document.querySelector('.btnRestart')
const btnCopy = document.querySelector('.btnCopy')

function randomPhraseYes (){
    let randomIndex = Math.floor(Math.random() * messagesYes.length)
    return messagesYes[randomIndex]
}

function showPhraseIfYes (){
    messageBox.textContent = randomPhraseYes()
    img1.style.display = 'none'
    img2.style.display = 'block'
    btnYes.style.display = 'none'
    btnNo.style.display = 'none'
    btnRestart.style.display = 'inline'
    btnCopy.style.display = 'inline'
}


let no = [
    "Sério que você não quer saber o que o pão de queijo da sabedoria tem a dizer?",
    "Poxa, não quer mesmo ouvir os segredos do pão de queijo da sabedoria?",
    "Ah, não está curioso para ver o que o pão de queijo da sabedoria pode compartilhar?",
    "Você realmente não quer descobrir o que o pão de queijo da sabedoria tem a oferecer em termos de sabedoria?",
    "Está certo de que não vai dar uma chance para as palavras do pão de queijo da sabedoria?",
    "Não está interessado em ouvir os conselhos do pão de queijo da sabedoria?",
    "Poxa, não quer dar uma olhada nas lições do pão de queijo da sabedoria?",
    "Sério mesmo que você não quer saber o que o pão de queijo da sabedoria tem a ensinar?",
    "Você não quer descobrir o que o pão de queijo da sabedoria tem para contar sobre a vida?",
    "Não quer saber as pepitas de sabedoria que o pão de queijo tem para oferecer?",
    "Tem certeza de que não vai dar uma chance para a sabedoria do pão de queijo?",
    "Poxa, não está interessado em ouvir os conselhos do pão de queijo da sabedoria?",
    "Você não quer saber o que o pão de queijo da sabedoria pode ensinar sobre felicidade e vida?",
    "Ah, não quer dar uma chance para o pão de queijo da sabedoria e suas lições?",
    "Está decidido a não conferir o que o pão de queijo da sabedoria tem para te oferecer?",
    "Não quer saber o que o pão de queijo da sabedoria tem a dizer sobre as coisas da vida?",
    "Você realmente não está interessado nas dicas do pão de queijo da sabedoria?",
    "Poxa, não está curioso para descobrir o que o pão de queijo da sabedoria pode compartilhar com você?",
    "Sério que você não quer saber o que o pão de queijo da sabedoria tem para ensinar?",
    "Você tem certeza de que não vai dar uma chance às palavras do pão de queijo da sabedoria?"
]

function randomPhraseNo (){
    let randomIndex2 = Math.floor(Math.random() * no.length)
    return no[randomIndex2]
}

function showPhraseIfNo (){
    messageBox.textContent = randomPhraseNo()
}


btnRestart.addEventListener('click', () => {
    window.location.reload()
})

btnCopy.addEventListener('click', () => {
    const textToCopy = messageBox.textContent;

    // Usando a API de Clipboard
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Texto copiado: ' + textToCopy);
    }).catch(err => {
        console.error('Erro ao copiar texto: ', err);
    });
});
