import getRandomElemArray from "../utils/getRandonElemArray"


const BtnQuote = ({ setQuote, phrases, setnumberBg }) => {

const handleRandomPhrase = () => {
  setQuote(getRandomElemArray(phrases))
  setnumberBg(getRandomElemArray([1, 2, 3, 4]))
}

  return (
    <button onClick={handleRandomPhrase}>☘️</button>
  )
}

export default BtnQuote