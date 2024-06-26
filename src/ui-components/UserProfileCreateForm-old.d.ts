import * as React from "react";
import {
  GridProps,
  SelectFieldProps,
  SwitchFieldProps,
  TextFieldProps,
} from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
  [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
  [key: string]: string;
};
export declare type Variant = {
  variantValues: VariantValues;
  overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
  hasError: boolean;
  errorMessage?: string;
};
export declare type ValidationFunction<T> = (
  value: T,
  validationResponse: ValidationResponse
) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserProfileCreateFormInputValues = {
  graduateType?: string;
  medicalDegree?: string;
  codeName?: string;
  step1Score?: number;
  step2Score?: number;
  comlex1Score?: number;
  comlex2Score?: number;
  redFlags?: boolean;
  aoa?: boolean;
  sigmaSigmaPi?: boolean;
  goldHumanism?: boolean;
  numPublicationsPosters?: number;
  numWorkExperiences?: number;
  numVolunteerExperiences?: number;
  classRank?: number;
  numApplications?: number;
  numInterviews?: number;
  numWithdrawals?: number;
};
export declare type UserProfileCreateFormValidationValues = {
  graduateType?: ValidationFunction<string>;
  medicalDegree?: ValidationFunction<string>;
  codeName?: ValidationFunction<string>;
  step1Score?: ValidationFunction<number>;
  step2Score?: ValidationFunction<number>;
  comlex1Score?: ValidationFunction<number>;
  comlex2Score?: ValidationFunction<number>;
  redFlags?: ValidationFunction<boolean>;
  aoa?: ValidationFunction<boolean>;
  sigmaSigmaPi?: ValidationFunction<boolean>;
  goldHumanism?: ValidationFunction<boolean>;
  numPublicationsPosters?: ValidationFunction<number>;
  numWorkExperiences?: ValidationFunction<number>;
  numVolunteerExperiences?: ValidationFunction<number>;
  classRank?: ValidationFunction<number>;
  numApplications?: ValidationFunction<number>;
  numInterviews?: ValidationFunction<number>;
  numWithdrawals?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type UserProfileCreateFormOverridesProps = {
  UserProfileCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
  graduateType?: PrimitiveOverrideProps<SelectFieldProps>;
  medicalDegree?: PrimitiveOverrideProps<SelectFieldProps>;
  codeName?: PrimitiveOverrideProps<TextFieldProps>;
  step1Score?: PrimitiveOverrideProps<TextFieldProps>;
  step2Score?: PrimitiveOverrideProps<TextFieldProps>;
  comlex1Score?: PrimitiveOverrideProps<TextFieldProps>;
  comlex2Score?: PrimitiveOverrideProps<TextFieldProps>;
  redFlags?: PrimitiveOverrideProps<SwitchFieldProps>;
  aoa?: PrimitiveOverrideProps<SwitchFieldProps>;
  sigmaSigmaPi?: PrimitiveOverrideProps<SwitchFieldProps>;
  goldHumanism?: PrimitiveOverrideProps<SwitchFieldProps>;
  numPublicationsPosters?: PrimitiveOverrideProps<TextFieldProps>;
  numWorkExperiences?: PrimitiveOverrideProps<TextFieldProps>;
  numVolunteerExperiences?: PrimitiveOverrideProps<TextFieldProps>;
  classRank?: PrimitiveOverrideProps<TextFieldProps>;
  numApplications?: PrimitiveOverrideProps<TextFieldProps>;
  numInterviews?: PrimitiveOverrideProps<TextFieldProps>;
  numWithdrawals?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserProfileCreateFormProps = React.PropsWithChildren<
  {
    isProfile?: boolean;
    overrides?: UserProfileCreateFormOverridesProps | undefined | null;
  } & {
    clearOnSuccess?: boolean;
    onSubmit?: (
      fields: UserProfileCreateFormInputValues
    ) => UserProfileCreateFormInputValues;
    onSuccess?: (fields: UserProfileCreateFormInputValues) => void;
    onError?: (
      fields: UserProfileCreateFormInputValues,
      errorMessage: string
    ) => void;
    onChange?: (
      fields: UserProfileCreateFormInputValues
    ) => UserProfileCreateFormInputValues;
    onValidate?: UserProfileCreateFormValidationValues;
  } & React.CSSProperties
>;
export default function UserProfileCreateForm(
  props: UserProfileCreateFormProps
): React.ReactElement;
