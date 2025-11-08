import { useState } from 'react'
import {
  FieldError,
  FieldErrorsImpl,
  FieldPath,
  Merge,
  UseFormRegister,
  UseFormReturn,
} from 'react-hook-form'

export type ReactiveState<T> = {
  value: T
  set: (newValue: T) => void
  register?: UseFormRegister<any>
  registerName?: any
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>
}

export const useReactiveState = <T>(
  initialValue: T,
  registerName?: any,
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>
): ReactiveState<T> => {
  const [value, setValue] = useState<any>(initialValue)

  return {
    value,
    set: setValue,
    registerName: registerName,
    error: error,
  }
}

export type ReactiveForm<P> = {
  key: FieldPath<any>
  form: UseFormReturn<any, any>
}

export const useReactiveForm = <P>(
  key: FieldPath<any>,
  form: UseFormReturn<any>
): ReactiveForm<P> => {
  return { key: key, form: form }
}
