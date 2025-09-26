/**
 *  枚举基类
 */
export default class EnumBase {
  /**
   *  枚举值
   */
  private value!: string;
  /**
   *  枚举描述
   */
  private label!: string;
  /**
   *  记录枚举
   */
  private static valueMap: Map<string, EnumBase> = new Map();
  /**
   *  构造函数
   *  @param value 枚举值
   *  @param label 枚举描述
   */
  public constructor(value: string, label: string) {
    this.value = value;
    this.label = label;
    const cls = this.constructor as typeof EnumBase;
    if (!cls.valueMap.has(value)) {
      cls.valueMap.set(value, this);
    }
  }
  /**
   *  获取枚举值
   *  @param value
   *   @returns
   */
  public getValue(): string | null {
    return this.value;
  }
  /**
   *  获取枚举描述
   *  @param value
   *  @returns
   */
  public getLabel(): string | null {
    return this.label;
  }
  /**
   *  根据枚举值转换为枚举
   *  @param this
   *  @param value
   *  @returns
   */
  static convert<E extends EnumBase>(this: new (...args: any[]) => E, value: string): E | null {
    return (this as any).valueMap.get(value) || null;
  }
}

export class ENApproveState extends EnumBase {
  /**       未审核       */
  static readonly NOTAPPROVED = new ENApproveState("1", "未审核");
  /**        已审核       */
  static readonly APPROVED = new ENApproveState("2", "已审核");
  /**        审核失败       */
  static readonly FAILAPPROVE = new ENApproveState("3", "审核失败");
  /***       审核中       */
  static readonly APPROVING = new ENApproveState("4", "审核中");
}


console.log(ENApproveState);
