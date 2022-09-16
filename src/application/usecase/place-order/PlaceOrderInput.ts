interface orderItemInput {
  idItem: number
  quantity: number
}

export default class PlaceOrderInput {
  constructor(readonly cpf: string,
    readonly orderItems: orderItemInput[],
    readonly coupon?: string,
    readonly issueDate?: Date
  ) { }
}
