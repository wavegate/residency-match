import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Institution } from "./graphql/types";
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
export declare type InstitutionUpdateFormInputValues = {
    name?: string;
    institutionCode?: string;
    imageLink?: string;
};
export declare type InstitutionUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    institutionCode?: ValidationFunction<string>;
    imageLink?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InstitutionUpdateFormOverridesProps = {
    InstitutionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    institutionCode?: PrimitiveOverrideProps<TextFieldProps>;
    imageLink?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InstitutionUpdateFormProps = React.PropsWithChildren<{
    overrides?: InstitutionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    institution?: Institution;
    onSubmit?: (fields: InstitutionUpdateFormInputValues) => InstitutionUpdateFormInputValues;
    onSuccess?: (fields: InstitutionUpdateFormInputValues) => void;
    onError?: (fields: InstitutionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InstitutionUpdateFormInputValues) => InstitutionUpdateFormInputValues;
    onValidate?: InstitutionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function InstitutionUpdateForm(props: InstitutionUpdateFormProps): React.ReactElement;
