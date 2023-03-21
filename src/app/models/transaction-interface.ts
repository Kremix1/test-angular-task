
// TODO Разобраться с типами интерфейса
//TODO Использую я его где-то?
export interface TransactionInterface {
  id: number,
  sendCardNumber: string,
  receiveCardNumber: string,
  amountMoney: number,
  date: string,
  cardYear: number,
  cardMonth: number,
  ownerName: string,
}
