import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator'
import { getManager } from 'typeorm'

/** ****************************************
 * Entityで使用するためのカスタムバリデーション
 * class-validatorにないものはここでカスタマイズ
 * entity内のみの使用を想定
 *******************************************/
// HACK: 戻り値の型定義を修正
type Unique = {
  (entity: any, validationOptions: ValidationOptions | undefined): any
}
export const Unique: Unique = (entity, validationOptions) => {
  // set default value
  validationOptions = {
    ...{ message: '$value already exists. Choose another.' },
    ...validationOptions,
  }
  return (object: any, propertyName: string) => {
    object[`class_entity_${propertyName}`] = entity
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: UniqueOnDatabaseExistConstraint,
    })
  }
}

// 上記のUniqueをvalidatorに追加するためオーバーライド(private)
type validate = {
  (value: any, args: ValidationArguments): Promise<boolean>
}
@ValidatorConstraint({ async: true })
export class UniqueOnDatabaseExistConstraint
  implements ValidatorConstraintInterface {
  //
  validate: validate = async (value, args) => {
    const entity = (args as any).object[`class_entity_${args.property}`]
    return getManager()
      .count(entity, { [args.property]: value })
      .then((count) => count < 1)
  }
}
