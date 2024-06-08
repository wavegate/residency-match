import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Specialty } from "./graphql/types";
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
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SpecialtyUpdateFormInputValues = {
    sortType?: string;
    name?: string;
    acgmeSpecialtyCode?: string;
};
export declare type SpecialtyUpdateFormValidationValues = {
    sortType?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    acgmeSpecialtyCode?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SpecialtyUpdateFormOverridesProps = {
    SpecialtyUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    sortType?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    acgmeSpecialtyCode?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SpecialtyUpdateFormProps = React.PropsWithChildren<{
    overrides?: SpecialtyUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    specialty?: Specialty;
    onSubmit?: (fields: SpecialtyUpdateFormInputValues) => SpecialtyUpdateFormInputValues;
    onSuccess?: (fields: SpecialtyUpdateFormInputValues) => void;
    onError?: (fields: SpecialtyUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SpecialtyUpdateFormInputValues) => SpecialtyUpdateFormInputValues;
    onValidate?: SpecialtyUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SpecialtyUpdateForm(props: SpecialtyUpdateFormProps): React.ReactElement;
