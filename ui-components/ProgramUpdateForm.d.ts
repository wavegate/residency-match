import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Program } from "./graphql/types";
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
export declare type ProgramUpdateFormInputValues = {
    name?: string;
    nrmpProgramCode?: string;
    type?: string;
};
export declare type ProgramUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    nrmpProgramCode?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProgramUpdateFormOverridesProps = {
    ProgramUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    nrmpProgramCode?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ProgramUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProgramUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    program?: Program;
    onSubmit?: (fields: ProgramUpdateFormInputValues) => ProgramUpdateFormInputValues;
    onSuccess?: (fields: ProgramUpdateFormInputValues) => void;
    onError?: (fields: ProgramUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProgramUpdateFormInputValues) => ProgramUpdateFormInputValues;
    onValidate?: ProgramUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProgramUpdateForm(props: ProgramUpdateFormProps): React.ReactElement;
