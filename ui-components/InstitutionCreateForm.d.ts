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
export declare type InstitutionCreateFormInputValues = {
    name?: string;
    institutionCode?: string;
};
export declare type InstitutionCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    institutionCode?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InstitutionCreateFormOverridesProps = {
    InstitutionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    institutionCode?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InstitutionCreateFormProps = React.PropsWithChildren<{
    overrides?: InstitutionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: InstitutionCreateFormInputValues) => InstitutionCreateFormInputValues;
    onSuccess?: (fields: InstitutionCreateFormInputValues) => void;
    onError?: (fields: InstitutionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InstitutionCreateFormInputValues) => InstitutionCreateFormInputValues;
    onValidate?: InstitutionCreateFormValidationValues;
} & React.CSSProperties>;
export default function InstitutionCreateForm(props: InstitutionCreateFormProps): React.ReactElement;
