import { BiCoin } from "react-icons/bi"

type passCoinViewProps = {
  passCoins: number;
}


const PassCoinView = ({ passCoins }: passCoinViewProps) => {
  return (
    <div className="flex flex-col gap-sm items-center bg-primary rounded-md w-fit p-lg">
      <h1 className="paragraph-1 self-start text-light">Pass Coin</h1>
      <div className="flex items-center gap-sm text-light">
        <BiCoin className="text-3xl" />
        <p className="header text-4xl text-light">{passCoins}</p>
      </div>
    </div>
  )
}

export default PassCoinView
