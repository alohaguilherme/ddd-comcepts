interface orderItemInput {
  idItem: number
  quantity: number
}

export default class SimulateFreightInput {
  constructor(readonly orderItems: orderItemInput[]) { }
}