import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ProgramCreateFormInputValues = {
    sortType?: string;
    name?: string;
    nrmpProgramCode?: string;
    type?: string;
};
export declare type ProgramCreateFormValidationValues = {
    sortType?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    nrmpProgramCode?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProgramCreateFormOverridesProps = {
    ProgramCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    sortType?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    nrmpProgramCode?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ProgramCreateFormProps = React.PropsWithChildren<{
    overrides?: ProgramCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProgramCreateFormInputValues) => ProgramCreateFormInputValues;
    onSuccess?: (fields: ProgramCreateFormInputValues) => void;
    onError?: (fields: ProgramCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProgramCreateFormInputValues) => ProgramCreateFormInputValues;
    onValidate?: ProgramCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProgramCreateForm(props: ProgramCreateFormProps): React.ReactElement;
