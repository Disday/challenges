enum Statuses {
  SOLD = 'sold',
  NOTSOLD = 'notSold'
}

interface IHandler {
  handle(params: Params): ReturnType
}

type Params = {
  status: Statuses,
  isRollback: boolean,
  lotId: string,
  authorId: string,
  companyName: string,
}

@Injectable()
export class changeStatusUsecase extends usecaseFabric(changeStatusPattern) {
  constructor(
    private readonly changeStatusToSoldUsecase: ChangeStatusToSoldUsecase,
    private readonly changeStatusToNotSoldUsecase: ChangeStatusToNotSoldUsecase,
  ) {
    super();
  }

  public async handleWHAT?(params: Params): ReturnType {
    // достаю из параметров только нужные, остальные пусть хендлер сам достаёт
    const { status, isRollback } = params

    if (isRollback) {
      return this.defaultChangeStatus(params)
    }

    // все хендлеры имплементируют один интерфейс (являются его подтипами) - у них есть одинаковый метод handle
    // просто выбираем нужный по статусу и вызываем метод. Это и есть полиморфизм подтипов :)
    // можно вообще без свитчей и ифов
    const handlers: { [key in Statuses]: IHandler } = {
      [Statuses.SOLD]: this.changeStatusToSoldUsecase,
      [Statuses.NOTSOLD]: this.changeStatusToNotSoldUsecase,
    }

    const handler = handlers[status]

    return handler.handle(params)
    // ?? undefined // или дефолтный хендлер и тогда без искключения

    // if (!handler) {
    //   throw Error
    // }

  }
}