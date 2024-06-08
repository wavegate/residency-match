import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type SpecialtyCreateFormInputValues = {
    sortType?: string;
    name?: string;
    acgmeSpecialtyCode?: string;
};
export declare type SpecialtyCreateFormValidationValues = {
    sortType?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    acgmeSpecialtyCode?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SpecialtyCreateFormOverridesProps = {
    SpecialtyCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    sortType?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    acgmeSpecialtyCode?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SpecialtyCreateFormProps = React.PropsWithChildren<{
    overrides?: SpecialtyCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SpecialtyCreateFormInputValues) => SpecialtyCreateFormInputValues;
    onSuccess?: (fields: SpecialtyCreateFormInputValues) => void;
    onError?: (fields: SpecialtyCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SpecialtyCreateFormInputValues) => SpecialtyCreateFormInputValues;
    onValidate?: SpecialtyCreateFormValidationValues;
} & React.CSSProperties>;
export default function SpecialtyCreateForm(props: SpecialtyCreateFormProps): React.ReactElement;
