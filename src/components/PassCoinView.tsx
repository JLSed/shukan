import { BiCoin } from "react-icons/bi"

type passCoinViewProps = {
  passCoins: number;
}


const PassCoinView = ({ passCoins }: passCoinViewProps) => {
  return (
    <div className="flex flex-col gap-sm items-center bg-primary rounded-md w-fit p-lg">
      <div className="flex items-center gap-sm text-light">
        <BiCoin className="text-md" />
        <h1 className="paragraph-1 text-light">Pass Coin</h1>
      </div>
      <p className="header text-5xl text-light">{passCoins}</p>
    </div>
  )
}

export default PassCoinView
