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
    img?: string;
    sortType?: string;
    inviteDateTime?: string;
    geographicPreference?: boolean;
    signal?: boolean;
    location?: string;
    additionalComments?: string;
    medicalDegree?: string;
    step1Score?: string;
    step2Score?: string;
    comlex1Score?: string;
    comlex2Score?: string;
    visaRequired?: boolean;
    subI?: boolean;
    home?: boolean;
    yearOfGraduation?: number;
    greenCard?: boolean;
    away?: boolean;
};
export declare type InterviewInviteCreateFormValidationValues = {
    anonymous?: ValidationFunction<boolean>;
    img?: ValidationFunction<string>;
    sortType?: ValidationFunction<string>;
    inviteDateTime?: ValidationFunction<string>;
    geographicPreference?: ValidationFunction<boolean>;
    signal?: ValidationFunction<boolean>;
    location?: ValidationFunction<string>;
    additionalComments?: ValidationFunction<string>;
    medicalDegree?: ValidationFunction<string>;
    step1Score?: ValidationFunction<string>;
    step2Score?: ValidationFunction<string>;
    comlex1Score?: ValidationFunction<string>;
    comlex2Score?: ValidationFunction<string>;
    visaRequired?: ValidationFunction<boolean>;
    subI?: ValidationFunction<boolean>;
    home?: ValidationFunction<boolean>;
    yearOfGraduation?: ValidationFunction<number>;
    greenCard?: ValidationFunction<boolean>;
    away?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InterviewInviteCreateFormOverridesProps = {
    InterviewInviteCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    anonymous?: PrimitiveOverrideProps<SwitchFieldProps>;
    img?: PrimitiveOverrideProps<SelectFieldProps>;
    sortType?: PrimitiveOverrideProps<TextFieldProps>;
    inviteDateTime?: PrimitiveOverrideProps<TextFieldProps>;
    geographicPreference?: PrimitiveOverrideProps<SwitchFieldProps>;
    signal?: PrimitiveOverrideProps<SwitchFieldProps>;
    location?: PrimitiveOverrideProps<SelectFieldProps>;
    additionalComments?: PrimitiveOverrideProps<TextFieldProps>;
    medicalDegree?: PrimitiveOverrideProps<SelectFieldProps>;
    step1Score?: PrimitiveOverrideProps<TextFieldProps>;
    step2Score?: PrimitiveOverrideProps<TextFieldProps>;
    comlex1Score?: PrimitiveOverrideProps<TextFieldProps>;
    comlex2Score?: PrimitiveOverrideProps<TextFieldProps>;
    visaRequired?: PrimitiveOverrideProps<SwitchFieldProps>;
    subI?: PrimitiveOverrideProps<SwitchFieldProps>;
    home?: PrimitiveOverrideProps<SwitchFieldProps>;
    yearOfGraduation?: PrimitiveOverrideProps<TextFieldProps>;
    greenCard?: PrimitiveOverrideProps<SwitchFieldProps>;
    away?: PrimitiveOverrideProps<SwitchFieldProps>;
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
