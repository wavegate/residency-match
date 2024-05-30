import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { SpecialtyInstitution } from "./graphql/types";
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
export declare type SpecialtyInstitutionUpdateFormInputValues = {};
export declare type SpecialtyInstitutionUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SpecialtyInstitutionUpdateFormOverridesProps = {
    SpecialtyInstitutionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type SpecialtyInstitutionUpdateFormProps = React.PropsWithChildren<{
    overrides?: SpecialtyInstitutionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    specialtyInstitution?: SpecialtyInstitution;
    onSubmit?: (fields: SpecialtyInstitutionUpdateFormInputValues) => SpecialtyInstitutionUpdateFormInputValues;
    onSuccess?: (fields: SpecialtyInstitutionUpdateFormInputValues) => void;
    onError?: (fields: SpecialtyInstitutionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SpecialtyInstitutionUpdateFormInputValues) => SpecialtyInstitutionUpdateFormInputValues;
    onValidate?: SpecialtyInstitutionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SpecialtyInstitutionUpdateForm(props: SpecialtyInstitutionUpdateFormProps): React.ReactElement;
