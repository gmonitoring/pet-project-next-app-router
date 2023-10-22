import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export type QueryFilterFormValues = {
  sex: Array<{ name: string; value: boolean }>
  brand: Array<{ name: string; value: boolean }>
  price: {
    min: number
    max: number
  }
  set: Array<{ name: string; value: boolean }>
  availability: Array<{ name: string; value: boolean }>
  material: Array<{ name: string; value: boolean }>
  glassMaterial: Array<{ name: string; value: boolean }>
  country: Array<{ name: string; value: boolean }>
}

export const QueryFilterValidationSchema: Yup.ObjectSchema<QueryFilterFormValues> =
    Yup.object()
      .shape({
        sex: Yup.array()
          .of(
            Yup.object({
              name: Yup.string().required(),
              value: Yup.boolean().required(),
            })
          )
          .required(),
        sex222: Yup.array()
          .of(
            Yup.object({
              name: Yup.string().required(),
              value: Yup.boolean().required(),
            })
          )
          .required(),
        brand: Yup.array()
          .of(
            Yup.object().shape({
              name: Yup.string().required(),
              value: Yup.boolean().required(),
            })
          )
          .required(),
        price: Yup.object()
          .shape({
            min: Yup.number().required(),
            max: Yup.number().required(),
          })
          .required(),
        set: Yup.array()
          .of(
            Yup.object().shape({
              name: Yup.string().required(),
              value: Yup.boolean().required(),
            })
          )
          .required(),
        availability: Yup.array()
          .of(
            Yup.object().shape({
              name: Yup.string().required(),
              value: Yup.boolean().required(),
            })
          )
          .required(),
        material: Yup.array()
          .of(
            Yup.object().shape({
              name: Yup.string().required(),
              value: Yup.boolean().required(),
            })
          )
          .required(),
        glassMaterial: Yup.array()
          .of(
            Yup.object().shape({
              name: Yup.string().required(),
              value: Yup.boolean().required(),
            })
          )
          .required(),
        country: Yup.array()
          .of(
            Yup.object().shape({
              name: Yup.string().required(),
              value: Yup.boolean().required(),
            })
          )
          .required(),
      })
      .required(),
  resolver = yupResolver<QueryFilterFormValues>(QueryFilterValidationSchema)

// feature: Yup.array(Yup.string().required()).nullable(),
// material: Yup.array(Yup.string().required()).nullable(),
// impermeabilityMin: Yup.string().required().nullable(),
// impermeabilityMax: Yup.string().required().nullable(),
// shape: Yup.array(Yup.string().required()).nullable(),
// diameterMin: Yup.number().required().nullable(),
// diameterMax: Yup.number().required().nullable(),
