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
export declare type SpecialtyInstitutionCreateFormInputValues = {
    sortType?: string;
};
export declare type SpecialtyInstitutionCreateFormValidationValues = {
    sortType?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SpecialtyInstitutionCreateFormOverridesProps = {
    SpecialtyInstitutionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    sortType?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SpecialtyInstitutionCreateFormProps = React.PropsWithChildren<{
    overrides?: SpecialtyInstitutionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SpecialtyInstitutionCreateFormInputValues) => SpecialtyInstitutionCreateFormInputValues;
    onSuccess?: (fields: SpecialtyInstitutionCreateFormInputValues) => void;
    onError?: (fields: SpecialtyInstitutionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SpecialtyInstitutionCreateFormInputValues) => SpecialtyInstitutionCreateFormInputValues;
    onValidate?: SpecialtyInstitutionCreateFormValidationValues;
} & React.CSSProperties>;
export default function SpecialtyInstitutionCreateForm(props: SpecialtyInstitutionCreateFormProps): React.ReactElement;
