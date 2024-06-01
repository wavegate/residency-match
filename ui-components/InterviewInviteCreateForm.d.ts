import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type InterviewInviteCreateFormInputValues = {
    anonymous?: boolean;
    inviteDateTime?: string;
    geographicPreference?: boolean;
    signal?: boolean;
    instate?: boolean;
    impression?: string;
    additionalComments?: string;
    graduateType?: string;
    medicalDegree?: string;
    step1Score?: number;
    step2Score?: number;
    comlex1Score?: number;
    comlex2Score?: number;
};
export declare type InterviewInviteCreateFormValidationValues = {
    anonymous?: ValidationFunction<boolean>;
    inviteDateTime?: ValidationFunction<string>;
    geographicPreference?: ValidationFunction<boolean>;
    signal?: ValidationFunction<boolean>;
    instate?: ValidationFunction<boolean>;
    impression?: ValidationFunction<string>;
    additionalComments?: ValidationFunction<string>;
    graduateType?: ValidationFunction<string>;
    medicalDegree?: ValidationFunction<string>;
    step1Score?: ValidationFunction<number>;
    step2Score?: ValidationFunction<number>;
    comlex1Score?: ValidationFunction<number>;
    comlex2Score?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InterviewInviteCreateFormOverridesProps = {
    InterviewInviteCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    anonymous?: PrimitiveOverrideProps<SwitchFieldProps>;
    inviteDateTime?: PrimitiveOverrideProps<TextFieldProps>;
    geographicPreference?: PrimitiveOverrideProps<SwitchFieldProps>;
    signal?: PrimitiveOverrideProps<SwitchFieldProps>;
    instate?: PrimitiveOverrideProps<SwitchFieldProps>;
    impression?: PrimitiveOverrideProps<TextFieldProps>;
    additionalComments?: PrimitiveOverrideProps<TextFieldProps>;
    graduateType?: PrimitiveOverrideProps<SelectFieldProps>;
    medicalDegree?: PrimitiveOverrideProps<SelectFieldProps>;
    step1Score?: PrimitiveOverrideProps<TextFieldProps>;
    step2Score?: PrimitiveOverrideProps<TextFieldProps>;
    comlex1Score?: PrimitiveOverrideProps<TextFieldProps>;
    comlex2Score?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InterviewInviteCreateFormProps = React.PropsWithChildren<{
    overrides?: InterviewInviteCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: InterviewInviteCreateFormInputValues) => InterviewInviteCreateFormInputValues;
    onSuccess?: (fields: InterviewInviteCreateFormInputValues) => void;
    onError?: (fields: InterviewInviteCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InterviewInviteCreateFormInputValues) => InterviewInviteCreateFormInputValues;
    onValidate?: InterviewInviteCreateFormValidationValues;
} & React.CSSProperties>;
export default function InterviewInviteCreateForm(props: InterviewInviteCreateFormProps): React.ReactElement;
